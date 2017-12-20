import ReactDOM from 'react-dom';
import React from 'react';
import App from 'containers/app';
import { ThemeProvider } from 'styled-components';
import Theme from 'theme/theme';
// eslint-disable-next-line no-unused-vars
import injectGlobal from 'theme/global';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'));
