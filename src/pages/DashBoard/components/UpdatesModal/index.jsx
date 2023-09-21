import {useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

import UpdateCard from 'pages/DashBoard/components/UpdateCard';

import * as S from './styles';

const UpdatesModal = ({modalObject, closeModal}) =>{
  useEffect(()=>{
    const escapeListener = (e) =>{
      const {key} = e;
      key === 'Escape' && closeModal(null);
    };

    window.addEventListener('keyup', escapeListener);

    return () => window.removeEventListener('keyup', escapeListener);

  },[closeModal]);

  return(
    <>
      {!!modalObject && (
        <S.Wrapper open={!!modalObject}>
          <S.Content>
            <UpdateCard expanded card={modalObject} openModal={closeModal}/>  
          </S.Content>

          <S.CloseButton onClick={() => closeModal(null) }> 
            <VscChromeClose />
          </S.CloseButton>
        </S.Wrapper>

      )}
    </>

   
  );
};

export default UpdatesModal;