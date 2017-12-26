/* eslint-disable no-underscore-dangle */
import ReactDOM from 'react-dom';
import React from 'react';
import App from 'containers/app';
import { ThemeProvider } from 'styled-components';
import Theme from 'theme/theme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import injectGlobal from 'theme/global';
import rootReducer from 'reducers';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'));
