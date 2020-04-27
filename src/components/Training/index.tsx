import React from 'react';
import {
	Container,
	Pic,
	Description,
	Wrap,
} from './styled';
import couch from '../../helpers/icons/couch.png';
import Statistics from "../Statisctics";
import {ToTraining} from "../Dashboard/styled";

const Training = () => {
	return (
		<Container>
			<Pic src={couch} />
			<Wrap>
				<Description>
					Абстракция, по определению, подрывает дедуктивный метод. Суждение преобразует трансцендентальный принцип восприятия. Апостериори, дуализм подчеркивает трагический даосизм, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего движения.
				</Description>
				<Statistics />
				<ToTraining to='/tasks/lesson1'>Начать курс</ToTraining>
			</Wrap>
		</Container>
	);
};

export default Training;