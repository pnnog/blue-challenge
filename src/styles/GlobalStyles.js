import { createGlobalStyle } from 'styled-components';

const GlobalStyles =  createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: ${({theme})=> theme.family};

    //scroll size
    ::-webkit-scrollbar{
      width: .3rem;
    }

    //scroll color
    ::-webkit-scrollbar-thumb{
      background-color: ${({theme})=>theme.colors.blue};
      border-radius: 20px;
    }

    // scroll empty slot 
    ::-webkit-scrollbar-track {
      background: #FAFAFA
    }

  }

  body{
    font-size: 1.6rem;
    background-color: ${({theme}) => theme.colors.white};

    @media (min-width: 768px) {
      background-color: ${({theme}) => theme.colors.xLightGrey};
    }
  }

`;

export default GlobalStyles;