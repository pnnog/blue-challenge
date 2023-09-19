import {LuMenu as OpenMenuIcon} from 'react-icons/lu';

import Logo from 'components/Logo';
import userImage from 'assets/userImage.png';

import * as S from './styles';

const Header = ({openMenu}) =>{

  return(
    <S.Wrapper >
      <S.MobileContent>
        <Logo />
        <OpenMenuIcon onClick={() => openMenu()} />
      </S.MobileContent>
 
      <S.DesktopContent>
        <S.Date> Segunda, 22 de Outubro de 2023</S.Date>
        <img src={userImage} alt="Imagem de perfil do usuário" />
      </S.DesktopContent>
      
    </S.Wrapper>

  );
};

export default Header;