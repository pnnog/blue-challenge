import * as S from './styles';
import logo from 'assets/logo.png';

const Logo = () => {
  return(
    <S.Wrapper>
      <img src={logo} alt="Logo da BLUE" />  
    </S.Wrapper>
  );
};

export default Logo;