import UpdateCard from 'components/UpdateCard';
import updatesCards from 'data/updatesCards.json';
import {Swiper, SwiperSlide} from 'swiper/react';

import * as S from './styles';

const UpdatesCarousel = () =>{

  


  const breakPoints ={
    [1]:{
      slidesPerView:1
    },
    [375]: {
      slidesPerView:1.6
    },

    [590]: {
      slidesPerView:2
    },

    [780]:{
      slidesPerView:2
    },

    [1080]:{
      slidesPerView:1
    }
  };



  return(
    <>
      <S.CarouselWrapper>
        <Swiper
          breakpoints={breakPoints}
          pagination={{clickable:true}}
          spaceBetween={30}
        >
          {updatesCards.map(card =>(
            <SwiperSlide key={card.id}>
              <UpdateCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CarouselWrapper>
      
     

      <S.CardsWrapper>
        {updatesCards.map(card =>(
          <UpdateCard key={card.id} card={card}/>
        ))}

      </S.CardsWrapper>
    </>

  );
};

export default UpdatesCarousel;