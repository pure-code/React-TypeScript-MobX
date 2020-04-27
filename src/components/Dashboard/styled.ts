import styled from "styled-components";
import {Link} from "react-router-dom";

export const Welcome = styled.h1`
	display:flex;
	align-items:center;
	width: 400px;
	font-size: 30px;
	margin: 0;
	padding: 30px;
	background: #2D325A;
	border-radius: 10px;
	box-sizing: border-box;
	
	@media(max-width: 1400px){
	  width: 320px;
	  padding: 20px;
	  font-size: 24px;
	}

  @media(max-width: 767px){
    width: 100%;
    font-size: 20px;
    padding: 10px 20px;
  }
`;

export const Philo = styled.img`
	height: 80px;
	display: block;
	margin: 0 30px 0 0;
	transform: scaleX(-1);
	
	@media(max-width: 1400px){
	  height: 60px;
	}

  @media(max-width: 767px){
    margin-right: 20px;
  }
`;

export const Description = styled.p`
	font-size: 24px;
	font-weight: 300;
	max-width: 1024px;
	line-height: 140%;
	margin: 60px 0 30px 0;
	
	@media(max-width: 1400px){
	margin: 30px 0 0 0;
	}

  @media(max-width: 767px){
    font-size: 18px;
    margin: 20px 0 0 0;
  }
	
`;

export const ToTraining = styled(Link)`
	display:flex;
	justify-content:center;
	align-items:center;
	width: 600px;
	height: 60px;
	border-radius: 10px;
	background: #ffee58;
	border: none;
	text-decoration: none;
	outline: none;
	font-size: 30px;
	font-weight: 700;
	color:#000;
	margin: 40px 0 0 0;
	
	@media(max-width: 1024px){
	  width: 400px;
	}

  @media(max-width: 767px){
    width: 100%;
    font-size: 22px;
    margin-top: 20px;
  }
`;
