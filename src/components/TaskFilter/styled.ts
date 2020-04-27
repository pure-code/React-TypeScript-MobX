import styled from "styled-components";

interface Props {
    active?: boolean;
}

export const FilterList = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 40px 30px 40px 0;
	border-bottom: 1px solid rgba(78, 124, 255, .6);

  @media(max-width: 767px){
    display: none;
  }
`;

export const Filter = styled.button<Props>`
	display: inline-flex;
	justify-content:center;
	align-items:center;
	background: ${({active}) => active ? '#4e7cff' : 'transparent'};
	border: none;
	height: 35px;
	color:#fff;
	cursor: pointer;
	outline: none;
	padding: 8px;
	font-size: 16px;
	white-space: nowrap;
	border-radius: 8px 8px 0 0;

	@media (max-width: 1370px){
	  font-size: 14px;
	}

	&:hover{
		background: ${({active}) => active ? '#4e7cff' : 'rgba(78, 124, 255, .2)'};
	}

`;
