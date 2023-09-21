import UpdateCard from 'pages/DashBoard/components/UpdateCard';
import updatesCards from 'data/updatesCards.json';
import {Swiper, SwiperSlide} from 'swiper/react';

import * as S from './styles';

const UpdatesCarousel = ({openModal}) =>{
  const breakPoints ={
    [1]:{
      slidesPerView:1
    },
    [400]: {
      slidesPerView:1.2
    },
    
    [520]: {
      slidesPerView:2
    },
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
              <UpdateCard card={card} openModal = {openModal}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CarouselWrapper>

      <S.CardsWrapper>
        {updatesCards.map(card =>(
          <UpdateCard key={card.id} card={card} openModal={openModal}/>
        ))}
      </S.CardsWrapper>
    </>

  );
};

export default UpdatesCarousel;