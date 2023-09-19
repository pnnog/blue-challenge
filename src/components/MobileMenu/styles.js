import styled from 'styled-components';

import * as NavLinkStyles from 'components/NavLink/styles';

const modifiers = {
  isOpen: ()=>`
    opacity:1;
    pointer-events: all;
  `
};

export const Wrapper = styled.menu`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme})=>theme.colors.white};
  opacity: 0;
  pointer-events: none;
  transition: all .3s ease-in-out ;
  display: flex;
  flex-direction: column;

  ${({$menuIsOpen}) => !!$menuIsOpen && modifiers.isOpen()}


  ${NavLinkStyles.Wrapper}{
    border-bottom: 1px solid ${({theme})=> theme.colors.xLightGrey};
  }

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 2.8rem;
  height:10rem;
  background-color: ${({theme})=>theme.colors.blue};
  box-shadow: ${({theme})=>theme.shadow};
`;

export const CloseIcon = styled.picture`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  transition: all .2s ease-in-out;

  svg{
    width: 100%;
    height: 100%;
    color: ${({theme})=>theme.colors.white};
  }

  &:hover{
    transform: scale(1.2);
  }
`;

