import styled from 'styled-components';

const headingModifiers = {
  sm:(theme)=>`
    @media (min-width: 768px){
      font-size: ${theme.fontSize.md};
      margin: 0 0 1.1rem 0;
    }
  `
};

export const Heading = styled.h2`
  font-size: ${({theme})=> theme.fontSize.xlg};
  color: ${({theme})=> theme.colors.dark};
  font-weight: 700;
  margin: 2rem 0;

  @media (min-width: 768px){
    margin: 2.8rem 0;
  }

  ${({theme, $sm})=> !!$sm && headingModifiers.sm(theme)};
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 2.8rem 4rem;


  @media (min-width: 768px){
    padding: 0 2.8rem 4rem 15.6rem;
  }  

  @media (min-width: 1080px){
    padding: 0 2.8rem 0 15.6rem;
  } 
`;

export const Caroulsel = styled.div`
  width: 100%;
  cursor: grabbing;

  .swiper-slide{
    padding:.2rem;
  }

  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal{
    position: absolute;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0, .3);
    padding: .3rem;
    border-radius: ${({theme})=>theme.radius.sm};
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  
    >span{
      background-color: white;
    }

    @media (min-width: 1280px) {
      display: none;
    }
  }

`;


const boxContainerModifiers ={

  primary:() =>`
    flex: 1;
    @media (min-width: 768px) {
      margin-top: -16.9rem;
    }

    @media (min-width: 768px) {
      padding: 4rem 5.2rem .8rem;
    }
  
  `,

  secondary: () => `
    @media (min-width: 768px){
      padding: 2.6rem 1.7rem; 
    }

    @media (min-width: 1080px){ 
      margin-top: -16.9rem;
      padding: 2.6rem 1.7rem; 
      max-width: 26.4rem; 
      width:100%;
    }
  `
};

export const BoxContainer = styled.main`
  background-color: ${({theme})=>theme.colors.white};
  border-radius: ${({theme})=>theme.radius.sm};
  box-shadow: none;
  transition: all .1s ease-in-out;
  @media (min-width: 768px) {
    box-shadow: ${({theme})=>theme.shadow};
  }

  ${({$secondary})=> $secondary? boxContainerModifiers.secondary():boxContainerModifiers.primary()};
  

`;