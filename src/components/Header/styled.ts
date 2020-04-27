import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props{
	active?: boolean;
	isCorrectAnswer?: boolean;
}

export const Container = styled.header`
	position: relative;
	padding: 8px 40px 0;
	background: #f7f9fb;
	box-shadow: 0 1px 6px rgba(126, 126, 126, 0.25);
	border-top: 4px solid #4EB543;
	z-index: 99999;
	@media(max-width: 767px){
		display:flex;
		align-items: flex-end;
		padding: 0 15px;
	}
`;

export const GoHome = styled(Link)`
	display:flex;
	justify-content:center;
	align-items:center;
	top: calc(100% + 20px);
	left: 40px;
	position:absolute;
	cursor: pointer;
	border: 2px solid #aaa;
	border-radius: 10px;
	outline: none;
	padding: 6px;
	background: transparent;

	&:hover{
		border-color: rgba(0,0,0, .7);

		& path{
			fill: rgba(0,0,0, .7);
		}
	}

	@media(max-width: 767px){
		position: static;
		margin: 4px 15px 4px 0;
		
		& svg{
			width: 20px;
			height: 20px;
		}
		
	}

`;

export const BreadCrumbs = styled.div<Props>`
	position:relative;
	display: flex;
	align-items: flex-end;
	flex-grow: 1;
	height: 100%;
	max-width: 1200px;
	margin: 0 auto;
	${({isCorrectAnswer}) => isCorrectAnswer ?
	`border: 1px solid transparent;`
	: 'border: 1px solid #aaa;'};
	border-bottom: none;
	border-radius: 10px 10px 0 0;
	overflow: hidden;
`;

export const Tab = styled.button<Props>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	flex-basis: 100%;
	border: none;
	border-right: 1px solid #aaa;
	height: 28px;
	background: ${({active}) => active ? '#e8f3ef' : 'transparent'};
	font-size: ${({active}) => active ? '16px' : '14px'};
	font-weight: 700;
	color: ${({active}) => active ? 'rgba(0,0,0, .9)' : 'rgba(0,0,0, .6)'};
	outline: none;
	text-decoration: none;
	cursor: pointer;
	&:last-child{
		border-right: none;
	}
`;