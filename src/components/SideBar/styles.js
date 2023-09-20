import styled from 'styled-components';

import * as LogoStyles from 'components/Logo/styles';

export const Wrapper = styled.aside`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 12.7rem;
  background-color: ${({theme})=>theme.colors.white};
  padding-top:1.1rem;
  padding-bottom: 2.2rem;
  box-shadow: ${({theme})=> theme.shadow};

  flex-direction: column;

  ${LogoStyles.Wrapper}{
    align-self: center;
    margin-bottom: 8rem;
  }

  @media (min-width:768px){
    display: flex;
  }
 
`;



