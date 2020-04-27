import React from 'react';
import TaskContainer from "../../../../../containers/Task";
import DragAndDrop from '../../../../DragAndDrop';

const items = ['1','2','3','4'];

const Task1 = () =>{

	return (
		<TaskContainer description='Расположи цифры по возрастанию'>
			<DragAndDrop items={items} />
		</TaskContainer>
)};

export default Task1;