import {MdClose as CloseMenuIcon} from 'react-icons/md';

import User from 'components/User';
import NavLinks from 'components/NavLinks';

import * as S from './styles';

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