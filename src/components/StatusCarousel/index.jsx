import {Swiper, SwiperSlide} from 'swiper/react';

import statusCards from 'data/statusCards.json';
import StatusCard from 'components/StatusCard';

import * as S from './styles';

const StatusCarousel = () =>{
  const breakPoints = {
    [1]:{
      slidesPerView:1,
      navigation: true,
      pagination:{clickable:false}
    },

    [520]:{
      slidesPerView:2
    },

    [868]:{
      slidesPerView:2.4
    },

    [1080]: {
      slidesPerView:2.6
  
    },
    
    [1280]: {
      slidesPerView:3
    },
  };

  return(
    <>
      <S.Wrapper>
        <Swiper
          breakpoints={breakPoints}
          pagination={{clickable:true}}
          spaceBetween={20}
        >
          {statusCards.map(card =>(
            <SwiperSlide key={card.id}>
              <StatusCard title={card.title} color={card.color} value={card.value}  />

            </SwiperSlide>
          ))}
        </Swiper>
      </S.Wrapper>
    </>

  );
};

export default StatusCarousel;