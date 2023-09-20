import {MdClose as CloseMenuIcon} from 'react-icons/md';

import NavLinks from 'components/NavLinks';

import * as S from './styles';
import User from 'components/User';

const MobileMenu = ({menuIsOpen, closeMenu}) =>{

  return(
    <S.Wrapper $menuIsOpen={menuIsOpen}>
      <S.Header>
        <User withLabel/>
        <S.CloseIcon> 
          <CloseMenuIcon onClick= {()=> closeMenu()} />
        </S.CloseIcon>
      </S.Header>

      <NavLinks />
  
        
    </S.Wrapper>
      
  );};

export default MobileMenu;