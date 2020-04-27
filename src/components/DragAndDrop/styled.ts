import styled from "styled-components";

interface Props {
	color: string;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items:center;
`;

export const DragList = styled.div`
	display:flex;
	width: 100%;
	justify-content:space-between;
`;

export const DragItem = styled.span<Props>`
	font-size: 140px;
	font-weight: 700;
	color: ${({color}) => color};
	cursor:pointer;
	@media(max-width: 1400px){
	font-size: 120px;
	}
	@media(max-width: 767px){
	font-size: 60px;
	}
`;

export const DragItemWrap = styled.span`
	display:flex;
	justify-content:center;
	align-items:center;
	margin: 0 20px;
	width: 13vw;
	height: 13vw;
	max-width: 200px;
	max-height: 200px;
	@media(max-width: 767px){
		margin: 0;
	}
`;

export const DropList = styled.div`
	display:flex;
	justify-content:space-between;
	margin-bottom: 60px;
`;

export const DropItem = styled.div`
	display:flex;
	justify-content:center;
	align-items: center;
	border: 4px dashed  #aaaaaa;
	border-radius: 10px;
	width: 13vw;
	height: 13vw;
	max-width: 200px;
	max-height: 200px;
	margin: 0 20px;
	@media(max-width: 767px){
		margin: 0 10px;
	}
`;

