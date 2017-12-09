/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import MajesticBoldFont from 'resources/images/fonts/Majesti-Banner-Bold.otf';
import MajesticBookItalicFont from 'resources/images/fonts/Majesti-Banner-BookItalic.otf';

injectGlobal`
  @font-face {
    font-family: "Majestic Bold";
    src: url('${MajesticBoldFont}');
  }
    @font-face {
    font-family: "Majestic Book Italic";
    src: url('${MajesticBookItalicFont}');
  }
  body {  
    margin: 0;
  };
  a { color: inherit; text-decoration: none; }
  * { box-sizing:border-box; }
`;
