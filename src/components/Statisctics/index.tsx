import React from 'react';
import {
	List,
	Item,
	Title,
	Total,
} from './styled';

import GamesIcon from "../../helpers/icons/Games";

const list = [
	{total: '13%', Icon: GamesIcon, title: 'Логика и Мышление'},
	{total: '0%', Icon: GamesIcon, title: 'Память и внимание'},
	{total: '26%', Icon: GamesIcon, title: '3D-мышление'},
];

const Statistics = () => {
	return (
		<List>
			{
				list.map( ({total, Icon, title}) =>
					<Item key={title}>
						<Total>
							<Icon width='64px' height='30px' />
							{total}
						</Total>

						<Title>{title}</Title>
					</Item>
				)
			}
		</List>

	);
};

export default Statistics;