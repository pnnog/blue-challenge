import styled from 'styled-components';

export const Wrapper = styled(({as})=>as)`
  display: flex;
  align-items: center;
  background-color: white;
  gap: 2rem;
  padding: 2.8rem;
  
  text-decoration: none;
  cursor: pointer;
  transition: all .1s ease-in-out;
  border: 0;
  background-color: ${({theme})=> theme.colors.white};


  &:hover{
    background-color: rgba(0,0,0,.2)
  }


  span{
    font-weight: 700;
    color: ${({theme, $active})=> $active? theme.colors.dark : theme.colors.grey};
    font-size: ${({theme})=> theme.fontSize.lg}
  }


  @media (min-width: 575px){
    gap: 1.2rem;
    padding: 1.3rem;

    img{
      max-width: 3rem;
    }

    span{
      font-size: ${({theme})=> theme.fontSize.sm};
    }

  }




 

`;


export const IconWrapper =  styled.picture`

  img{
    width: 100%;
    height: 100%;
  }

  width: 2.4rem;

  @media (min-width: 575px){

    img{
      max-width: 3rem;
    }

    span{
      font-size: ${({theme})=> theme.fontSize.sm};
    }

  }
`;

