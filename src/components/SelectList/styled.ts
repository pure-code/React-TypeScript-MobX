import styled from "styled-components";

interface Props {
	selected?: boolean;
}

export const List = styled.div`
	display:flex;
	flex-wrap: wrap;
	justify-content:space-around;
	@media(max-width: 767px){
		padding: 0 15px;
	}
`;

export const Select = styled.button<Props>`
	display:flex;
	justify-content:center;
	align-items:center;
	width: 15vw;
	height: 15vw;
	max-width: 250px;
	max-height: 250px;
	border: ${({selected}) => selected ? '4px solid #4EB543' : '4px dashed #aaa'};
	${({selected}) => selected ? 'box-shadow: 0 2px 10px 0 rgba(0,0,0, .1)' : null};
	border-radius: 4px;
	background: ${({selected}) => selected ? '#f5fffb' : 'transparent'};
	outline: none;
	margin: 0 10px;
	padding: 20px;
	font-weight: 600;
	font-size: 36px;
	cursor:pointer;

	&:hover{
		${({selected}) => selected ? null : 'border-color: rgba(0,0,0, .5)'};
	}

	@media(max-width: 767px){
		width: 40vw;
		height: auto;
		max-width: 160px;
		max-height: 160px;
		margin: 0 0 20px 0;
		padding: 30px 10px;
	}

`;

export const Pic = styled.img`
	display:block;
	max-width: 100%;
`;
