import React, {useState} from 'react';
import {useStore} from '../../hooks/use-store';
import { observer} from 'mobx-react';
import {AppState} from '../../stores';
import {
	Container,
	Nav,
	NavList,
	NavItem,
	NavLink,
	User,
	Title,
	ToggleMenu,
  AccountInfo
} from './styled';

import Copyright from '../Copyright';

import TrainingIcon from '../../helpers/icons/Training';
import TasksIcon from '../../helpers/icons/Tasks';
import DashboardIcon from '../../helpers/icons/Dashboard';
import GamesIcon from '../../helpers/icons/Games';
import SettingsIcon from '../../helpers/icons/Settings';
import play from '../../helpers/icons/play.svg';

const menuLinks = [
	{title: 'Рабочий стол', to: '/', Icon: DashboardIcon},
	{title: 'Пошаговый курс', to: '/tasks/lesson1', Icon: TrainingIcon},
	{title: 'Задачи', to: '/tasks', Icon: TasksIcon},
	{title: 'Игры', to: '/games', Icon: GamesIcon},
];

interface StoreProps{
	isMobile: boolean;
	isSidebarOpen: boolean;
	toggleSidebar(value?: boolean): void;
	navHeight: number;
}

const Sidebar: React.FC = () => {
	const {
		isSidebarOpen,
		toggleSidebar,
		navHeight,
		isMobile,
	}: StoreProps = useStore((store: AppState) => (
		{
			isSidebarOpen: store.sidebarStore.isSidebarOpen,
			isMobile: store.viewStateStore.isMobile,
			navHeight: store.viewStateStore.navHeight,
			toggleSidebar: (value?: boolean)=> store.sidebarStore.toggleSidebar(value),
		}
	));

	const [selectedMenu, setSelectedMenu] = useState(0);
  const [openSettings, setOpenSettings] = useState(false);

	return (
		<Container navHeight={navHeight} isSidebarOpen={isSidebarOpen && !isMobile}>
      <AccountInfo onClick={ () => setOpenSettings(!openSettings)} open={openSettings}>
        <User isSidebarOpen={isSidebarOpen && !isMobile} openSettings={openSettings}>
          {isSidebarOpen && !isMobile ? 'Юный Мыслитель' : null}
        </User>
        {
          isSidebarOpen && !isMobile ?
            <>
              <NavLink to='/settings'>
                <SettingsIcon />
                <Title>
                  Настройки
                </Title>
              </NavLink>
              <NavLink to='/'>
                <SettingsIcon />
                <Title>
                  Выйти
                </Title>
              </NavLink>
            </>
            : null
        }
      </AccountInfo>
			<Nav>
				<NavList>
					{
						menuLinks.map( ({to, title, Icon}, i) =>
							<NavItem onClick={()=> setSelectedMenu(i)} active={i === selectedMenu} key={to}>
								<NavLink to={to}>
									<Icon />
										{ isSidebarOpen && !isMobile ? <Title>{title}</Title> : null}
									{
										i === 1 && (isSidebarOpen && !isMobile) ? <img className='playIcon' src={play} /> : null
									}
								</NavLink>
							</NavItem>)
					}
				</NavList>
			</Nav>
			{isSidebarOpen && !isMobile ? <Copyright /> : null }
			<ToggleMenu onClick={ (): void => toggleSidebar()}>{isSidebarOpen ? <>&laquo;</> : <>&raquo;</>}</ToggleMenu>
		</Container>
	);
};

export default observer(Sidebar);