import { useNavigate } from 'react-router-dom';

import logo from 'assets/logo.png';

import * as S from './styles';


const Logo = () => {
  const navigate = useNavigate();

  return(
    <S.Wrapper onClick={()=> navigate('/')}>
      <img src={logo} alt="Logo da BLUE" />  
    </S.Wrapper>
  );
};

export default Logo;