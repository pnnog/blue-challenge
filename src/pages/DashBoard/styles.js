import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display:flex;
`;



export const Content =  styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2rem;
`;

export const Container = styled.div`
  display: flex;
  
  gap: 2rem;

  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-left: 2.8rem;
  padding-right: 2.8rem;
  
  transition: all .1s ease-in-out;

  @media (min-width: 575px){
    margin-top: -16.9rem;
  } 


  @media (min-width: 1280px){
    flex-direction: row;
  } 
  
`;


export const Box = styled.div`
  background-color: ${({theme})=>theme.colors.white};
  border-radius: ${({theme})=>theme.radius.sm};
  box-shadow: ${({theme})=>theme.shadow};
  height: 100%;
`;


export const Main = styled(Box).attrs({as:'main'})`
  flex: 1;
`;

export const News = styled(Box).attrs({as:'article'})`
  min-width: 26.4rem;
  


`;

export const Cards = styled.div`
  display:flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4.1rem 5.2rem 0;


  @media (min-width: 575px){
   flex-direction: row; 
  }
`;


