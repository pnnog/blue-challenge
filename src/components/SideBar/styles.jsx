import styled from 'styled-components';
import * as LogoStyles from 'components/Logo/styles';

export const Wrapper = styled.aside`
  display: none;
  background-color: ${({theme})=>theme.colors.white};
  max-width: 12.7rem;
  width: 100%;
  padding: 1.1rem 0 4rem 0;
 
  height: 100vh;
  flex-direction: column;
  box-shadow: ${({theme})=> theme.shadow};
  
  ${LogoStyles.Wrapper}{
    align-self: center;
    margin-bottom: 9rem;
  }

  @media (min-width:575px){
    display: flex;
  }
 
`;



