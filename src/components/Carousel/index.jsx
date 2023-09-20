import statusCards from 'data/statusCards.json';


import Slider from 'react-elastic-carousel';
import StatusCard from 'components/StatusCard';
import * as S from './styles';

const Carousel = () =>{

  const breakPoints =[
 
    { width: 768, itemsToShow: 3, pagination:false, enableSwipe: false 
    }
  ];

  return(
    <S.CaroulselWrapper>
      <Slider
        breakPoints={breakPoints}
        disableArrowsOnEnd
        enableSwipe={false}
        itemPadding={[10]}
        outerSpacing={0}
        showArrows={false}           
      >
        {statusCards.map((card => <StatusCard key={card.id}{...card}/>))}
          
      </Slider>

    </S.CaroulselWrapper>


      
  );
};

export default Carousel;