import React from 'react';
import { observer} from 'mobx-react';
import {
	Route,
} from "react-router-dom";
import {
	Container,
	Content,
	Category,
	Help,
	Feedback,
} from './styled';
import Sidebar from "../../components/Sidebar";
import TaskList from "../../components/TaskList";
import Dashboard from "../../components/Dashboard";
import Training from "../../components/Training";
import Settings from "../../components/Settings";
import Games from "../../components/Games";
import {useStore} from "../../hooks/use-store";
import {AppState} from "../../stores";

const routes = [
	{path: '/', title: 'Рабочий стол', Component: Dashboard},
	{path: '/tasks', title: 'Задачи', Component: TaskList},
	{path: '/training', title: 'Пошаговый курс', Component: Training},
	{path: '/settings', title: 'Настройки', Component: Settings},
	{path: '/games', title: 'Игры', Component: Games},
];

const Account: React.FC = () => {
	const {
		isMobile,
		navHeight,
	} = useStore((store: AppState) => (
		{
			isMobile: store.viewStateStore.isMobile,
			navHeight: store.viewStateStore.navHeight,
		}
	));

	return (
		<Container isMobile={isMobile} navHeight={navHeight}>
			<Sidebar />
			<Content>
				{routes.map(({ path, Component, title }) => (
					<Route key={path} exact path={path}>
						{({ match }) => (
							match !== null ? (
									<>
										<Category>{title}</Category>
										<Component />
									</>
								) : null
						)}
					</Route>
				))}
			</Content>
			<Help>
				{
					isMobile ? null : 'Помощь'
				}
			</Help>
			<Feedback>Нашли ошибку?</Feedback>
		</Container>
	);
};

export default observer(Account);