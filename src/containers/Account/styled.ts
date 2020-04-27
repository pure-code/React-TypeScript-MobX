import styled from "styled-components";
import pattern from '../../helpers/icons/pattern.png';
import help from '../../helpers/icons/help.svg';
import {APP_HEIGHT} from "../../constants";

interface Props {
	isMobile?: boolean;
	navHeight?: number;
}

export const Container = styled.section<Props>`
	display:flex;
	min-height: ${APP_HEIGHT};
	color:#fff;
	background: #25294A;
	${({isMobile, navHeight}) => isMobile ? `padding-bottom: ${navHeight}` : '0'};
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
	min-height: ${APP_HEIGHT};
	flex-grow: 1;
	flex-basis: 80%;
	padding: 60px 80px 0 80px;
	background: url(${pattern}) repeat top right;
	box-sizing: border-box;

	@media(max-width: 1400px){
	  padding: 50px 50px 0 50px;
	}

	@media(max-width: 1024px){
	  padding: 50px 30px 0 30px;
	}

  @media(max-width: 767px){
    padding: 30px 15px 15px;
  }
`;

export const Category =styled.span`
	display:block;
	font-size: 36px;
	font-weight: 700;
	margin: 0 0 20px 0;

  @media(max-width: 767px){
    font-size: 24px;
  }
`;

export const Feedback = styled.button`
	position:absolute;
	bottom: 20px;
	right: 30px;
	background: #f65164;
	border: none;
	color:#fff;
	font-weight: 700;
	border-radius: 10px;
	padding: 10px;

  @media(max-width: 767px){
    display: none;
  }
`;

export const Help = styled.button`
	position:absolute;
	top: 20px;
	right: 30px;
	background: #41cd7d;
	border: none;
	color:#fff;
	font-weight: 700;
	border-radius: 10px;
	padding: 10px 20px;

	@media(max-width: 767px){
	  width: 30px;
	  height: 30px;
	  background: url(${help}) no-repeat center;
	  right: 15px;
	  top: 24px;
	  background-size: contain;
    border-radius: 0;
    font-size: 0;
	}

`;
