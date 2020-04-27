import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.div`
	display:flex;
	max-width: 1620px;
	flex-wrap: wrap;
`;

export const TaskItem = styled(Link)`
	position:relative;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	flex-grow: 1;
	flex-basis: 15%;
	height: 150px;
	margin: 0 30px 70px 0;
	background: #e8f3ef;
	border-radius: 6px;
	min-width: 200px;
	max-width: 272px;
	@media(max-width: 1024px){
	  max-width: calc(50% - 30px);
	}
	@media(max-width: 767px){
	  max-width: 100%;
	  flex-basis: 100%;
	  height: 200px;
	  margin-right: 0;
	}
`;

export const Preview = styled.img`
	display:block;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

export const TaskTitle = styled.span`
	position:absolute;
	top: 110%;
	left: 50%;
	transform: translateX(-50%);
	color:#fff;
	font-size: 18px;
	font-weight: 700;
	white-space: nowrap;
`;