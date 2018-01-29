/* eslint-disable no-underscore-dangle,no-unused-vars */
import ReactDOM from 'react-dom';
import React from 'react';
import App from 'containers/app';
import { ThemeProvider } from 'styled-components';
import Theme from 'theme/theme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import injectGlobal from 'theme/global';
import rootReducer from 'reducers';
import Scroll from 'components/common/scroll';

const ScrollComponent = Scroll(App);
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <ScrollComponent />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'));
