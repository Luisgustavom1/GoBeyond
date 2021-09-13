import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-family: 'Nunito', sans-serif;
    font-size: 62.5%;
  }

  li, ul, ol, a {
    text-decoration: none;
  }

  button, input, text-area {
    border: none;
  }

  body {
    overflow-x: hidden;
  }
`;