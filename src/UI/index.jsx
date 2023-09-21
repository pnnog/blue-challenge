import styled from 'styled-components';

const modifiers = {
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

  ${({theme, $sm})=> !!$sm && modifiers.sm(theme)};
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 2.8rem;
  padding-right: 2.8rem;

  @media (min-width: 768px){
    padding-left: 15.6rem;
  }  
  
`;

export const MainContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 5.2rem;
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

