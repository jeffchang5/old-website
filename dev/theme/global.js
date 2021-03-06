import { createGlobalStyle } from 'styled-components';
import MajesticBoldFont from 'resources/fonts/Majesti-Banner-Bold.otf';
import LiberationSansFont from 'resources/fonts/LiberationSans-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "Majestic Bold";
    src: url('${MajesticBoldFont}');
  }
  @font-face {
    font-family: "Liberation Sans";
    src: url('${LiberationSansFont}');
  }
  body {  
    margin: 0;
  }
  p {
    margin: 0;
  }
  a { color: inherit; text-decoration: none; }
  * { 
    box-sizing:border-box;
    font-weight: 200;  
   }
`;
