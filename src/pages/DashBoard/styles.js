import styled from 'styled-components';

export const Wrapper = styled.div`

`;


export const Content =  styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px){
    margin-left: 12.7rem;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;
  padding-left: 2.8rem;
  padding-right: 2.8rem;
  transition: all .1s ease-in-out;

  @media (min-width: 768px){
    margin-top: -16.9rem;
  } 

  @media (min-width: 1280px){
    flex-direction: row;
  } 
  
`;


export const Box = styled.div`
  border-radius: ${({theme})=>theme.radius.sm};
  background-color: ${({theme})=>theme.colors.white};
  box-shadow: none;
  height: 100%;

  @media (min-width: 768px) {
    box-shadow: ${({theme})=>theme.shadow};    
  }
  
`;


export const Main = styled(Box).attrs({as:'main'})`
  flex: 1;
  padding: 4rem 0 .8rem;
`;

export const News = styled(Box).attrs({as:'article'})`
  min-width: 26.4rem;
`;

export const CarouselSection = styled.section`
  padding-left:4.2rem;
  padding-right:4.2rem;

`;

export const LastOffersSection = styled.section`

    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    >div:nth-child(even) {
      background-color: ${({theme})=> theme.colors.xLightGrey};
    }

    @media (min-width: 768px){
      gap: 0;
    }
`;