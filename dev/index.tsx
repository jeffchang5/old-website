/* eslint-disable no-underscore-dangle */
// @ts-ignore
// import ReactDOM from 'react-dom';
// import React from 'react';
// import App from 'containers/app';
// import { ThemeProvider } from 'styled-components';
// import Theme from 'theme/theme';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// // eslint-disable-next-line no-unused-vars
// import injectGlobal from 'theme/global';
// import rootReducer from 'reducers';
// import Scroll from 'components/common/scroll';
//
// const ScrollComponent = Scroll(App);
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
//
// ReactDOM.render(
//   <ThemeProvider theme={Theme}>
//     <Provider store={store}>
//       <ScrollComponent />
//     </Provider>
//   </ThemeProvider>,
//   document.getElementById('root'),
// );

// @ts-ignore
import * as React from 'react';
// @ts-ignore
import * as ReactDOM from 'react-dom';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    // @ts-ignore
    // @ts-ignore
    return (
        // @ts-ignore
        <div className="hello">
            // @ts-ignore
            adsfasdf
            // @ts-ignore
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            // @ts-ignore
            </div>
        // @ts-ignore
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
ReactDOM.render(
// @ts-ignore
  <Hello />,
  document.getElementById('root'),
);
