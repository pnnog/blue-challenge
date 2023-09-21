import logo from 'assets/logo.png';

import * as S from './styles';

const Logo = () => {
  return(
    <S.Wrapper>
      <img src={logo} alt="Logo da BLUE" />  
    </S.Wrapper>
  );
};

export default Logo;