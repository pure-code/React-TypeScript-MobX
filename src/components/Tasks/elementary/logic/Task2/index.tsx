import React from 'react';
import TaskContainer from "../../../../../containers/Task";
import SelectList from "../../../../SelectList";
import pic1 from './img/1.png';
import pic2 from './img/2.png';
import pic3 from './img/3.png';
import pic4 from './img/4.png';

const items = [pic1,pic2,pic3,pic4];

const Task1 = () =>{

	return (
		<TaskContainer description='Выбери лишний транспорт'>
			<SelectList items={items} rightAnswer={4} />
		</TaskContainer>
)};

export default Task1;