import styled from 'styled-components';

import * as CurrentDateStyles from 'components/CurrentDate/styles';
import * as StatusCarousel from 'pages/DashBoard/components/StatusCarousel/styles';

import {  BoxContainer } from 'UI';

export const Wrapper =  styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all .1s ease-in-out;

  @media (min-width: 1080px){
    flex-direction: row;
  } 
`;

export const Main = styled(BoxContainer)`
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

export const Updates = styled(BoxContainer).attrs({as:'article', $secondary:true})`  
 
`;



