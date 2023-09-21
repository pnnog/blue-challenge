import { Caroulsel } from 'UI';

import styled from 'styled-components';

export const CarouselWrapper = styled(Caroulsel)`
  @media (min-width: 768px){
    max-width: 50rem;
  }
  
  @media (min-width: 1080px) {
    display: none; 
  }


  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal{
  
    @media (min-width: 400px) {
      display: none;
    }
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