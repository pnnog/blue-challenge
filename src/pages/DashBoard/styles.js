import { Container, Heading } from 'UI';
import styled from 'styled-components';


export const Content =  styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all .1s ease-in-out;

  @media (min-width: 768px) {
    margin-top: -16.9rem;
  }

  @media (min-width: 1080px){
    flex-direction: row;
  } 
  
`;


export const Box = styled.div`
  background-color: ${({theme})=>theme.colors.white};
  height: 100%;
  border-radius: ${({theme})=>theme.radius.sm};
  box-shadow: none;

  @media (min-width: 768px) {
    box-shadow: ${({theme})=>theme.shadow};    

  }
  
`;


export const Main = styled(Box).attrs({as:'main'})`
  flex: 1;
  padding: 4rem 0 .8rem;

  ${Heading}{
    @media (min-width: 768px){
      margin-left: 5.2rem;
    }
  }
`;

export const Updates = styled(Box).attrs({as:'article'})`
  width: 100%;


  @media (min-width: 1080px){
    max-width: 26.4rem; 
  }
  
  padding: 2.6rem 1.7rem;  

  >div {
    margin-bottom: 1.2rem;
  }

  >div:last-child{
    margin-bottom: 0;
  }
`;

export const CarouselSection = styled.section`
`;

export const LastOffersSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  > div:nth-child(even) {
    background-color: ${({theme})=> theme.colors.xLightGrey};
  }

  @media (min-width: 768px){
    gap: 0;
  }
`;