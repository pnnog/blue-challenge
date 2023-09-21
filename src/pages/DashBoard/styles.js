import styled from 'styled-components';

import { Container } from 'UI';
import * as CurrentDateStyles from 'components/CurrentDate/styles';
import * as StatusCarousel from 'components/StatusCarousel/styles';

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
  flex: 1;

  ${CurrentDateStyles.Wrapper}{
      color: ${({theme})=>theme.colors.blue};
      margin-bottom: 2rem;
    }

  ${StatusCarousel.Wrapper}{
     margin-bottom: 5rem;

    @media (min-width: 768px){
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px){
    ${CurrentDateStyles.Wrapper}{
      display: none;
    }
    padding: 4rem 5.2rem .8rem;
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
    margin: 0 -5.2rem;
    gap: 0;
  }
`;

export const Updates = styled(Box).attrs({as:'article'})`
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
