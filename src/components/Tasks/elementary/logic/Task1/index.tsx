import React from 'react';
import TaskContainer from "../../../../../containers/Task";
import SelectList from "../../../../SelectList";
import truck from './img/truck.png';
import moto from './img/moto.png';
import school from './img/school.png';
import cops from './img/cops.png';

const items = [truck,moto,school,cops];

const Task1 = () =>{

	return (
		<TaskContainer description='Выбери лишний транспорт'>
			<SelectList items={items} rightAnswer={2} />
		</TaskContainer>
)};

export default Task1;