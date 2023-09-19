import * as S from './styles';

const NavLink = ({children, icon, active, as ='a', ...props}) => {
  return(
    <S.Wrapper $active={active} as={as} {...props }>
      <S.IconWrapper>
        <img src={icon.image} alt={icon.alt} /> 
      </S.IconWrapper>
      
      <span> {children} </span>
    </S.Wrapper>
  );
};

export default NavLink;