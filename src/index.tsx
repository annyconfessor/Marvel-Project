import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import GlobalStyle from './globalStyle'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
