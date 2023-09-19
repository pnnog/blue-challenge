import {MdClose as CloseMenuIcon} from 'react-icons/md';

import useImage from 'assets/userImage.png';
import NavLinks from 'components/NavLinks';

import * as S from './styles';

const MobileMenu = ({menuIsOpen, closeMenu}) =>{

  return(
    <S.Wrapper $menuIsOpen={menuIsOpen}>

      <S.Header>
        <img src={useImage} alt="Imagem do usuário" />  

        <S.CloseIcon> 
          <CloseMenuIcon onClick= {()=> closeMenu()} />
        </S.CloseIcon>
      </S.Header>

        
      <NavLinks />
  
        
    </S.Wrapper>
      
  );};

export default MobileMenu;