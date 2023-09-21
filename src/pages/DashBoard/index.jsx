import { useState } from 'react';

import lastOffers from 'data/lastOffers.json';

import LastOffer from 'pages/DashBoard/components/LastOffer';
import UpdatesCarousel from 'pages/DashBoard/components/UpdatesCarousel';
import StatusCarousel from 'pages/DashBoard/components/StatusCarousel';
import CurrentDate from 'components/CurrentDate';
import UpdatesModal from 'pages/DashBoard/components/UpdatesModal';

import { Heading } from 'UI';
import * as S from './styles';

const DashBoard = () =>{
  const [modalObject, setModalObject] = useState(null);

  const toggleModal = (newModal) =>{
    newModal? setModalObject(newModal): setModalObject(null);
  };

  return(
    <>
      <S.Wrapper>
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
      </S.Wrapper>
      <UpdatesModal modalObject = {modalObject} closeModal ={toggleModal}/>

    </>

  );
};

export default DashBoard;