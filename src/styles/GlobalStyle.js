import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: rgba(25, 117, 210, 0.1);
  }

  a {
  color: inherit;
  text-decoration: none;
}

button {
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  appearance: none;
}

input {
  border-radius: 0;
  border: none;
}

select,
div,
input {
  border: none;
  outline: none;
}
`;

export default GlobalStyle;
