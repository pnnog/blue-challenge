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
  border-radius: ${({theme})=>theme.radius.sm};
  box-shadow: none;

  @media (min-width: 768px) {
    box-shadow: ${({theme})=>theme.shadow};    
  }
  
`;

export const Main = styled(Box).attrs({as:'main'})`
  padding: 4rem 0 .8rem;
  flex: 1;

  ${Heading}{
    @media (min-width: 768px){
      margin-left: 5.2rem;
    }
  }
`;

export const Updates = styled(Box).attrs({as:'article'})`
  padding: 2.6rem 0rem;
  width:100%;
  
  @media (min-width: 768px){
    padding: 2.6rem 1.7rem; 
  }

  @media (min-width: 1080px){ 
    max-width: 26.4rem; 
    width:100%;
  }

  > div {
    margin-bottom: 1.2rem;
  }

  >div:last-child{
    margin-bottom: 0;
  }
`;

export const StatusSection = styled.section` 
  @media (min-width: 768px) {
    padding: 0 5.2rem;
  }
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