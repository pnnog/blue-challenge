import {LuMenu as OpenMenuIcon} from 'react-icons/lu';

import Logo from 'components/Logo';
import User from 'components/User';
import CurrentDate from 'components/CurrentDate';

import * as S from './styles';

const Header = ({openMenu}) =>{

  return(
    <S.Wrapper >
      <S.MobileContent>
        <Logo />
        <OpenMenuIcon onClick={() => openMenu()} />
      </S.MobileContent>
 
      <S.DesktopContent>
        <CurrentDate />
        <User />
      </S.DesktopContent>
      
    </S.Wrapper>

  );
};

export default Header;