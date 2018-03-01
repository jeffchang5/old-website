import { keyframes } from 'styled-components';

export const slideDown = keyframes`
    from {
      transform: translate3d(0, -100%, 0);
    }
  
    to {
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }`;

export const slideUp = keyframes`
    from {
      transform: translate3d(0, 0%, 0);
    }
  
    to {
      transform: translate3d(0, -100%, 0);
      visibility: hidden;
    }`;
