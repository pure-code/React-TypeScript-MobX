import React from 'react';
import {
	Container,
	TaskItem,
	Preview,
	TaskTitle,
} from './styled';
import TaskFilter from '../TaskFilter';

import preview from '../../helpers/icons/preview.png';

const items = [1,2,3,4,5,6,7,8,9, 10, 11, 12,13,14,15,17,18,19];

const TaskList = () => {
	return (
		<>
			<TaskFilter />
			<Container>
			{
				items.map( item =>
					<TaskItem key={item} to='tasks/lesson1'>
						<Preview src={preview} />
						<TaskTitle>Наведи порядок</TaskTitle>
					</TaskItem>)
			}
		</Container>
		</>

	);
};

export default TaskList;