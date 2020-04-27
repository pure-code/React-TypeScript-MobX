import React from "react";
import {
	Container,
} from './styled';
import wrongSound from './sound/wrong.mp3';
import rightSound from './sound/right.mp3';

const Notification = (props: any)=>{

	const audio = new Audio();
	const playAudio = (isCorrectAnswer: boolean) => {
		audio.src = isCorrectAnswer ? rightSound : wrongSound;
		audio.play();
	};

	return (
		<Container {...props}>
			{
				props.isCorrectAnswer ? 'Правильный ответ' : 'Неправильный ответ'
			}
			{playAudio(props.isCorrectAnswer)}
		</Container>
	)
};

export default Notification;
