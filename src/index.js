import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/Globalstyle';
import Router from './Router';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
