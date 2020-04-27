import styled from "styled-components";

export const Container = styled.div`
	display:flex;
	align-items:flex-start;
	margin: 60px 0 0 0;
	
	& button{
		margin-top: 80px;
	}
	
`;

export const Wrap = styled.div`
`;

export const Pic = styled.img`
	display:block;
	height: 500px;
	transform: scaleX(-1);
	margin: 0 30px 0 0;
`;

export const Description = styled.p`
	max-width: 960px;
	font-size: 30px;
	line-height: 130%;
	margin: 0 0 80px 0;
	padding: 30px;
	border-radius: 10px;
	background: #2D325A;
`;
