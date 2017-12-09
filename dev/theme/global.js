/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import MajesticFont from 'resources/images/fonts/Majesti-Banner-Bold.otf';

injectGlobal`
  @font-face {
    font-family: "Majestic Bold";
    src: url('${MajesticFont}');
  }
  body {  
    margin: 0;
  };
  a { color: inherit; text-decoration: none; }
  * { box-sizing:border-box; }
`;
