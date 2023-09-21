import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  gap: 2rem;
  padding: 2.8rem;
  background-color: ${({theme})=> theme.colors.white};
  text-decoration: none;
  border: 0;
  cursor: pointer;
  transition: all .1s ease-in-out;

  &:hover{
    background-color: rgba(0,0,0,.2)
  }

  span{
    font-weight: 700;
    color: ${({theme, $active})=> $active? theme.colors.dark : theme.colors.grey};
    font-size: ${({theme})=> theme.fontSize.lg}
  }


  @media (min-width: 768px){
    gap: 1.2rem;
    padding: .9rem 1.3rem;

    span{
      font-size: ${({theme})=> theme.fontSize.sm};
    }
  }
`;


export const IconWrapper =  styled.picture`
  width: 1.8;
  height: 1.8;

  img{
    filter: ${({$active})=> $active? 'brightness(0%)' : 'brightness(100%)' };
    width: 100%;
    height: 100%;
  }
`;

