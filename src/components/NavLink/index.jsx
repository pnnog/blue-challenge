import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';

const NavLink = ({children, icon, path,  ...props}) => {

  const navigate = useNavigate();

  const goToPage = () =>{
    !!path && navigate(`${path}`);
  };

  const {pathname} = useLocation();
 
  return(
    <S.Wrapper $active={path === pathname} {...props } onClick={goToPage}>

      <S.IconWrapper $active={path === pathname}>
        <img src={icon.image} alt={icon.alt} /> 
      </S.IconWrapper>
      
      <span> {children} </span>
    </S.Wrapper>
  );
};

export default NavLink;