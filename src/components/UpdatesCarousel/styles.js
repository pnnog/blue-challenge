import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  display: block;
  width: 100%;
  
  .swiper-slide{
    padding:.2rem;
  }

  .swiper-horizontal > 
  .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal{
    left: 50%;
    transform: translateX(-50%);
    width:fit-content ;
  }


  @media (min-width: 768px){
    max-width: 50rem;
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