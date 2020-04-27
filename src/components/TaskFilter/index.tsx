import React from 'react';
import {
	FilterList,
	Filter
} from './styled';

const filters = [
	'Все задачи',
	'Логические задачи',
	'3D-мышление',
	'Умный счёт',
	'Истина и ложь',
	'Закономерности',
	'Взвешивания',
	'Матрицы'
];

const TaskList = () => {
	return (
		<FilterList>
			{
				filters.map( (filter, i) =>
					<Filter active={!i} key={filter}>
						{filter}
					</Filter>
				)
			}
		</FilterList>
	);
};

export default TaskList;