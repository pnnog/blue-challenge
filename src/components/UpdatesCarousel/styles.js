import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 60rem;

  .swiper-slide{
    padding:.2rem;
  }

  .swiper-pagination-bullets{
    @media (max-width:1080px ) {
      bottom: 2.8rem
    }
  }
  
  @media (min-width: 1080px) {
    display: none; 
  }

`;

export const CardsWrapper = styled.div`
  display: none;

  @media (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;