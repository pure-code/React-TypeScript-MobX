import styled from "styled-components";

interface Props {
    isCorrectAnswer?: boolean;
}

export const Container = styled.span<Props>`
	position:absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display:flex;
	align-items:center;
	justify-content:center;
	font-size: 20px;
	font-weight: 700;
	background: ${ ({isCorrectAnswer}) => isCorrectAnswer ? '#4EB543' : '#ff6759'};
	border-radius: 10px 10px 0 0;
	color:#fff;
`;