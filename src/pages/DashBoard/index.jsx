import { useEffect, useState } from 'react';

import lastOffers from 'data/lastOffers.json';
import updatesCards from 'data/updatesCards.json';

import SideBar from 'components/SideBar';
import MobileMenu from 'components/MobileMenu';

import * as S from './styles';
import Header from 'components/Header';
import LastOffer from 'components/LastOffer';
import { Heading } from 'UI';
import UpdateCard from 'components/UpdateCard';
import UpdatesCarousel from 'components/UpdatesCarousel';

const DashBoard = () =>{
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('resize', () =>{
      let screenWidth = window.innerWidth;
      screenWidth > 768 && setMenuIsOpen(false);
    });

  },[]);

  const toggleMenu =  () =>{
    setMenuIsOpen(state => !state);
  };


  return(
    <>
      <SideBar />
      <Header openMenu = {toggleMenu} />

      <S.Content>
        <S.Main>
          <S.CarouselSection>
          </S.CarouselSection>

          <Heading> Últimas propostas</Heading>

          <S.LastOffersSection>
            {lastOffers.map((lastOffer)=> (
              <LastOffer  key={lastOffer.id} {...lastOffer} />  
            ))}

          </S.LastOffersSection>
        </S.Main>

        <S.Updates>
          <Heading $sm> Atualizações</Heading>

  
          <UpdatesCarousel />

            
        </S.Updates>
      </S.Content>


      <MobileMenu menuIsOpen ={menuIsOpen} closeMenu = {toggleMenu} />

    </>

  );
};

export default DashBoard;