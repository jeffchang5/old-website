import { css } from 'styled-components';

export default {
  small: (...args) => css`@media (min-width: 376px) {${css(...args)};}`,
  tablet: (...args) => css`@media (min-width: 768px) {${css(...args)};}`,
  desktop: (...args) => css`@media (min-width: 975px) {${css(...args)};}`,
  giant: (...args) => css`@media (min-width: 1170px) {${css(...args)};}`,
};
