import Logo from 'components/Logo';
import * as S from './styles';
import NavLinks from 'components/NavLinks';

const SideBar = () =>{


  return(
    <S.Wrapper> 
      <Logo/>
      <NavLinks />  
    </S.Wrapper>
  );
};
export default SideBar;