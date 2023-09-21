import { Caroulsel } from 'UI';
import styled from 'styled-components';

export const Wrapper = styled(Caroulsel).attrs({as:'section'})`
 
  @media (min-width: 1080px){
    width: 52rem
  }

  @media (min-width: 1100px){
    width: 54rem
  }

  @media (min-width: 1125px){
    width: 56rem
  }

  @media (min-width: 1150px){
    width: 58rem
  }

  @media (min-width: 1175px){
    width: 60rem
  }

  @media (min-width: 1200px){
    width: 62rem
  }

  @media (min-width: 1225px){
    width: 65rem
  }

  @media (min-width: 1250px){
    width: 68rem;
  }

  @media (min-width: 1280px){
    width: 71rem;
    cursor: auto;
  }

`;