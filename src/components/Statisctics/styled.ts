import styled from "styled-components";

export const List = styled.div`
	display:flex;
	align-items: flex-start;
	margin: 40px 0 0 0;

  @media(max-width: 767px){
    margin-top: 20px;
  }
`;

export const Item = styled.div`
  width: 24%;
	max-width: 260px;
	background: #2D325A;
	padding: 24px 30px;
	border-radius: 10px;
	margin: 0 20px 0 0;

	&:last-child{
		margin-right: 0;
	}
	
	@media(max-width: 1400px){
  	padding: 20px 24px;
	}
	
	@media(max-width: 1024px){
  	padding: 16px;
	}

  @media(max-width: 767px){
    padding: 10px 16px;
    margin-right: 10px;
  }
`;

export const Total = styled.span`
	display: flex;
	align-items:center;
	flex-wrap: wrap;
	font-size: 30px;
	font-weight: 700;
	color:#41cd7d;
	margin: 0 0 10px 0;

  @media(max-width: 767px){
    justify-content:center;
    font-size: 24px;
    margin: 0;
  }

	& svg{
		margin-right: 30px;

    @media(max-width: 767px){
      width: 40px;
      margin: 0 0 10px 0;
    }
	}

`;

export const Title = styled.span`
	font-size: 22px;
	font-weight: 400;
	
	@media(max-width: 1400px){
	  font-size: 18px;
	}

  @media(max-width: 767px){
    display: none;
  }
`;
