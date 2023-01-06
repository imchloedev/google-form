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
  appearance: none;
  border-radius: 0;
}

select,
div,
input {
  border: none;
  outline: none;
}
`;

export default GlobalStyle;
