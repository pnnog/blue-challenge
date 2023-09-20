import Logo from 'components/Logo';
import NavLinks from 'components/NavLinks';

import * as S from './styles';

const SideBar = () =>{
  return(
    <S.Wrapper> 
      <Logo/>
      <NavLinks />  
    </S.Wrapper>
  );
};
export default SideBar;