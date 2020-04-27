import styled from "styled-components";
import {APP_HEIGHT} from "../../constants";

export const Container = styled.section`
  position:relative;
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction: column;
	background: #e8f3ef;
	height: calc(${APP_HEIGHT} - 100px - 41px);
	box-sizing: border-box;
	padding: 60px 0;

	@media(max-width: 1400px){
	  height: calc(${APP_HEIGHT} - 80px - 41px);
	}

	@media(max-width: 767px){
	  height: calc(${APP_HEIGHT} - 60px - 41px);
	}
`;

export const LessonDescription = styled.h1`
	max-width: 600px;
	font-size: 26px;
	color: #335578;
	margin: 0 0 40px 0;
	text-align:center;
	
	@media(max-width: 767px){
	  font-size: 18px;
	  margin-bottom: 20px;
	}
`;

export const DisableLesson = styled.div`
  position:absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
`;
