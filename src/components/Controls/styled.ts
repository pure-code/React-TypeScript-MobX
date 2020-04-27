import styled from "styled-components";
import book from '../../helpers/icons/theory.png';
import sound from '../../helpers/icons/sound.svg';
import {Link} from "react-router-dom";

interface Props{
  isAnswerCheck: boolean;
  isCorrectAnswer: boolean;
  isAnswerSelected: boolean;
}

export const Container = styled.div`
  position:relative;
	display:flex;
	align-items:center;
	justify-content:space-between;
	height: 100px;
	width: 100%;
	background: #1F4576;
	user-select: none;
	margin: auto 0 0 0;
	
	@media(max-width: 1400px){
		height: 80px;
	}
	
	@media(max-width: 767px){
		height: 60px;
	}
`;

export const ControlBtnWrap = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ControlBtn = styled.button<Props>`
	position: relative;
	display:flex;
	align-items:center;
	justify-content:center;
	width: 500px;
	height: 60px;
	background: none;
	border: none;
	border-radius: 20px;
	color: ${({isAnswerCheck, isCorrectAnswer}) => isCorrectAnswer && isAnswerCheck ? '#000' : '#fff'};
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	font-size: 28px;
	margin: 0;
	cursor: pointer;
	transition: .2s;
	background: ${({isCorrectAnswer, isAnswerCheck}) =>{
  if(isAnswerCheck && isCorrectAnswer) return '#ffee58';
  if(isAnswerCheck && !isCorrectAnswer) return '#ff6759';
  return '#4EB543';
}};
	outline: none;
	text-decoration:none;
	
	@media(max-width: 1400px){
		width: 400px;
		height: 50px;
		border-radius: 16px;
		font-size: 22px;
	}
	
	@media(max-width: 767px){
		width: 60vw;
		font-size: 18px;
	}

	@media(max-width: 450px){
		width: 150px;
	}

	&:focus{
		&::before{
			${({isAnswerSelected}) => !isAnswerSelected ? `content: 'Выберите ответ :)'` : null};
			position:absolute;
			left: 50%;
			bottom: calc(100% + 10px);
			transform: translateX(-50%);
			font-size: 16px;
			color: #000;
			background: #fff;
			padding: 5px 10px;
			box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
			border-radius: 10px;
		}

		&::after{
			${({isAnswerSelected}) => !isAnswerSelected ? `content: ''` : null};
			position:absolute;
			left: 50%;
			bottom: 100%;
			transform: translateX(-50%);
			width: 0;
			height: 0;
			border-right: 10px solid transparent;
			border-left: 10px solid transparent;
			border-top: 10px solid #fff;
		}
	}
`;

export const NextTask = styled.button`
	position:absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	background: transparent;
	border: none;
	outline: none;
	cursor:pointer;
`;

export const NextLesson = styled(Link)`
	position:absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	background: transparent;
	border: none;
	outline: none;
	cursor:pointer;
`;

export const Theory = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 300px;
	box-sizing: border-box;
	height: 100%;
	cursor: pointer;
	color:#fff;
	font-weight: 700;
	font-size: 20px;
	padding: 0 40px 0 0;

	&::before{
		content: '';
		position: absolute;
		bottom: 0;
		left: 30px;
    width: 47%;
    height: 130%;
		background: url(${book}) no-repeat center;
		background-size: contain;
		margin: 0 20px 0 0;
		transform: scaleX(-1);
		@media(max-width: 767px){
		  position:static;
		  width: 65px;
		  height: 100%;
		  margin: 0;
		}
	}

	&::after{
		position: absolute;
		content: '';
		right: 0;
		top: 0;
		bottom: 0;
		background: #0C3C66;
		width: 2px;
	}

	@media(max-width: 1100px){
	  width: 140px;
	  font-size: 0;
	}

	@media(max-width: 767px){
		width: auto;
		padding: 0 0 0 15px;

		&::after{
		  display: none;
		}
	}

`;

export const Listen = styled(Theory)`

	@media(max-width: 767px){
		padding: 0 15px 0 0;
	}
	 &::after{
	 	left: 0;
	 	right: auto;
	 }

	&::before{
		top: 50%;
		width: 70px;
		height: 70px;
		background: url(${sound}) no-repeat center;
		background-size: contain;
		margin: -35px 20px 0 0;
		transform: scaleX(-1);
		
		@media(max-width: 767px){
		  position:static;
		  width: 50px;
		  height: 50px;
		  margin: 0;
		}
	}

`;