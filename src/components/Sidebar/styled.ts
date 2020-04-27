import styled from "styled-components";
import {Link} from "react-router-dom";
import avatar from '../../helpers/icons/avatar.png';

interface Props {
	isSidebarOpen?: boolean;
	active?: boolean;
	open?: boolean;
	openSettings?: boolean;
	navHeight?: number;
}

export const Container = styled.aside<Props>`
	position:relative;
	flex-grow: 1;
	flex-basis: 20%;
	min-width: ${({isSidebarOpen}) => isSidebarOpen ? '300px' : '80px'};
	max-width: ${({isSidebarOpen}) => isSidebarOpen ? '300px' : '80px'};
	background: #202442;
	padding: 20px 0 0 0;
	box-sizing: border-box;

	@media(max-width: 1380px){
		min-width: ${({isSidebarOpen}) => isSidebarOpen ? '250px' : '80px'};
	}

	@media(max-width: 767px){
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    width: 100%;
    max-width: 100%;
    height: ${({navHeight}) => navHeight ? navHeight : null};
    z-index: 999;
    padding: 0;
    box-shadow: 0 0 6px 0 #191d3a;
	}

`;

export const Nav = styled.nav`
	margin: 10px 0 0 0;

	@media(max-width: 767px){
		flex-grow: 1;
		margin: 0;
	}

`;

export const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	@media(max-width: 767px){
		display:flex;
	}

`;

export const NavItem = styled.li<Props>`
	flex-grow: 1;
	flex-basis: 25%;
	border-bottom: 1px solid #2D325A;
	${({active}) => active ? `background: #2D325A; box-shadow: 6px 0 0 0 #4e7cff inset` : null};
	cursor:pointer;

	&:hover{
		background: ${({active}) => active ? '#2D325A' : 'rgba(45,50,90, .4)'};
	}

	@media(max-width: 767px){
		${({active}) => active ? `box-shadow: 0 -6px 0 0 #4e7cff inset` : null};
		border-bottom: none;
		border-right: 1px solid #2D325A;
		height: 80px;
	}

`;

export const NavLink = styled(Link)`
	position:relative;
	display:flex;
	align-items:center;
	padding: 15px 0 15px 20px;
	text-decoration: none;

	@media(max-width: 767px){
		width: 100%;
		height: 100%;
		justify-content: center;
		padding: 0;
	}
	& svg{
		width: 40px;
		margin: 0 10px 0 0;

		@media(max-width: 1380px){
			width: 30px;
		}

		@media(max-width: 767px){
			margin: 0;
		}
	}

	& .playIcon{
		position:absolute;
		top: 50%;
		right: 30px;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
	}

`;

export const Title = styled.span`
	font-size: 20px;
	color:#fff;
	padding: 0;

	@media(max-width: 1380px){
		font-size: 18px;
	}
`;

export const AccountInfo = styled.div<Props>`
	max-height: ${({open}) => open ? '200px': '81px'};
	overflow: hidden;
	transition: .5s;
	border-bottom: 1px solid #2D325A;

	@media(max-width: 767px){
		border-bottom: none;
		border-right: 1px solid #2D325A;
	}

	& span{
		font-size: 18px;
	}

	& svg{
		width: 20px;
		height: 20px;
	}

`;

export const User = styled.button<Props>`
	display: flex;
	width: 100%;
	align-items: center;
	${({isSidebarOpen}) => isSidebarOpen ? null : 'justify-content:center;'};
	margin: 0;
	font-size: 16px;
	font-weight: 700;
	text-decoration: underline;
	padding: ${({isSidebarOpen}) => isSidebarOpen ? '15px 15px 15px 20px' : '15px 0'};
	color:#fff;
  border: none;
	background: transparent;
	cursor: pointer;
	outline: none;

	&:hover{
		&::after{
			${({isSidebarOpen}) => isSidebarOpen ? `content:'';` : null};
		}
	}

	&::before{
		content: '';
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: url(${avatar}) no-repeat center #fff;
		background-size: contain;
		margin: ${({isSidebarOpen}) => isSidebarOpen ? `0 15px 0 0` : '0'};

		@media(max-width: 767px){
			margin: 0 15px;
		}

	}

	&::after{
		${({openSettings, isSidebarOpen}) => openSettings && isSidebarOpen ? `content:'';` : null};
		${({openSettings}) => openSettings ? `transform: scaleY(-1)` : null};
		margin: 0 0 0 15px;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-top: 8px solid #fff;
	}

`;

export const ToggleMenu = styled.button`
	position:absolute;
	top: 0;
	left: 100%;
	display:flex;
	align-items:center;
	justify-content:center;
	width: 24px;
	height: 40px;
	background: rgba(78,124,255,.1);
	border: none;
	border-radius: 0 8px 8px 0;
	font-size: 30px;
	line-height: 36px;
	color:#fff;
	outline: none;
	cursor:pointer;
	padding: 0;
	margin: 0;
`;
