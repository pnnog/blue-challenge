import { useEffect, useState } from 'react';

import lastOffers from 'data/lastOffers.json';

import SideBar from 'components/SideBar';
import MobileMenu from 'components/MobileMenu';
import Header from 'components/Header';
import LastOffer from 'components/LastOffer';
import UpdatesCarousel from 'components/UpdatesCarousel';
import StatusCarousel from 'components/StatusCarousel';
import CurrentDate from 'components/CurrentDate';
import UpdatesModal from 'components/UpdatesModal';

import { Heading } from 'UI';
import * as S from './styles';

const DashBoard = () =>{
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modalObject, setModalObject] = useState(null);

  const toggleMenu =  () =>{
    setMenuIsOpen(state => !state);
  };

  const toggleModal = (newModal) =>{
    newModal? setModalObject(newModal): setModalObject(null);
  };

  useEffect(()=>{
    const checkWidth = () =>{
      let screenWidth = window.innerWidth;
      screenWidth > 768 && setMenuIsOpen(false);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };

  },[]);

  return(
    <>
      <SideBar />
      <Header openMenu = {toggleMenu} />

      <S.Content>
        <S.Main>
          <CurrentDate />

          <StatusCarousel />

          <Heading> Últimas propostas</Heading>

          <S.LastOffersSection>
            {lastOffers.map((lastOffer)=> (
              <LastOffer  key={lastOffer.id} {...lastOffer} />  
            ))}
          </S.LastOffersSection>

        </S.Main>

        <S.Updates>
          <Heading $sm> Atualizações</Heading>
          <UpdatesCarousel openModal={toggleModal} />
        </S.Updates>
      </S.Content>

      <MobileMenu menuIsOpen ={menuIsOpen} closeMenu = {toggleMenu} />
      <UpdatesModal modalObject = {modalObject} closeModal ={toggleModal}/>

    </>

  );
};

export default DashBoard;