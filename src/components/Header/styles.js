import styled from 'styled-components';
import { Container } from 'UI';

export const Wrapper = styled(Container).attrs({as:'header'})`
  display: flex;
  align-items: center;
  height: 10rem;
  width: 100%;
  padding-top: 1.3rem;
  padding-bottom: 1.1rem;
  border-bottom: .2rem solid ${({theme})=>theme.colors.blue};
  margin-bottom: 4rem;
  
  box-shadow: ${({theme})=> theme.shadow};
  background-color: ${({theme})=> theme.colors.white};
  
  @media (min-width:768px){
    display: block;
    height: 25.6rem;
    background-color: ${({theme})=> theme.colors.blue};
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const DesktopContent =  styled.div`
  display: flex;
  align-items: center;
  display: none;
  justify-content: space-between;


  img{
    width: 4.1rem;
    height: 4.1rem;
  }

  @media (min-width: 768px) {
    display: flex;

  }
`;

export const MobileContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;


  svg{
    width: 2.8rem;
    height: 2.8rem;
    color: ${({theme})=> theme.colors.blue};
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
      transform: scale(1.125);
    }
  }


  @media (min-width: 768px) {
    display: none;
  }



`;