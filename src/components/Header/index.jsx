import {LuMenu as OpenMenuIcon} from 'react-icons/lu';

import Logo from 'components/Logo';

import * as S from './styles';
import User from 'components/User';

const Header = ({openMenu}) =>{

  return(
    <S.Wrapper >
      <S.MobileContent>
        <Logo />
        <OpenMenuIcon onClick={() => openMenu()} />
      </S.MobileContent>
 
      <S.DesktopContent>
        <S.Date> Segunda, 22 de Outubro de 2023</S.Date>
        <User />
      </S.DesktopContent>
      
    </S.Wrapper>

  );
};

export default Header;