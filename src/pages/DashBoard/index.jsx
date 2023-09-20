import { useEffect, useState } from 'react';

import lastOffers from 'data/lastOffers.json';

import SideBar from 'components/SideBar';
import MobileMenu from 'components/MobileMenu';

import * as S from './styles';
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import LastOffer from 'components/LastOffer';
import { Heading } from 'UI';

const DashBoard = () =>{
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('resize', () =>{
      let screenWidth = window.innerWidth;
      if(screenWidth > 768) setMenuIsOpen(false);
    });

  },[]);

  const toggleMenu =  () =>{
    setMenuIsOpen(state => !state);
  };


  return(
    <>
      <SideBar />
      
      <S.Content>
        <Header openMenu = {toggleMenu} />
        <S.Container>

          <S.Main>
            <S.CarouselSection>
              <Carousel />
            </S.CarouselSection>

            <Heading> Últimas propostas</Heading>

            <S.LastOffersSection>
              {lastOffers.map((lastOffer)=> (
                <LastOffer  key={lastOffer.id} {...lastOffer} />  
              ))}

            </S.LastOffersSection>
          </S.Main>

          <S.News>
            CONTEÚDO de NOTÍCIAS
          </S.News>
        </S.Container>

      </S.Content>

      <MobileMenu menuIsOpen ={menuIsOpen} closeMenu = {toggleMenu} />

    </>

  );
};

export default DashBoard;