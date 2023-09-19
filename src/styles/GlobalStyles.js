import { createGlobalStyle } from "styled-components";

const GlobalStyles =  createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: ${({theme})=> theme.family};
  }

  body{
    font-size: 1.6rem;
  }

`

export default GlobalStyles