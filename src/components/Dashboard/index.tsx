import React from 'react';
import { observer} from 'mobx-react';
import {
	Welcome,
	Philo,
	Description,
	ToTraining,
} from './styled';
import Statistics from "../Statisctics";

import philo from '../../helpers/icons/philo.png';
import {useStore} from "../../hooks/use-store";
import {AppState} from "../..//stores";

interface StoreProps {
	isMobile: boolean;
}

const Dashboard: React.FC = () => {
	const {
		isMobile,
	}: StoreProps = useStore((store: AppState) => (
		{
			isMobile: store.viewStateStore.isMobile,
		}
	));
	return (
		<>
			<Welcome>
				<Philo src={philo} />
				Привет,<br/>Юный мыслитель!
			</Welcome>
			<Statistics />
			{
				isMobile ?
					<>
						<ToTraining to='/tasks/lesson1'>Перейти к курсу</ToTraining>
						<Description>Суждение трогательно наивно. Созерцание амбивалентно выводит структурализм. Реальность, как следует из вышесказанного, принимает во внимание типичный язык образов. Бабувизм заполняет непредвиденный мир. Суждение, как следует из вышесказанного, трогательно наивно.
						</Description>
					</>
					:
					<>
						<Description>Суждение трогательно наивно. Созерцание амбивалентно выводит структурализм. Реальность, как следует из вышесказанного, принимает во внимание типичный язык образов. Бабувизм заполняет непредвиденный мир. Суждение, как следует из вышесказанного, трогательно наивно.
						</Description>
						<ToTraining to='/tasks/lesson1'>Перейти к курсу</ToTraining>
					</>
			}
		</>

	);
};

export default observer(Dashboard);