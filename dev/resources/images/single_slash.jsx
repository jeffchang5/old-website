import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SlashImage = styled.svg`
  width: 100%;
  height: 100%;
  
  & path {
    fill: ${props => props.color} 
  }
`;

const DoubleSlash = props => (
  <SlashImage color={props.color} viewBox="0 0 4 8.49">
    <path d="M0,8.69,3.35,0h.82L.8,8.69Z" />
  </SlashImage>
);
DoubleSlash.propTypes = {
  color: PropTypes.string,
};

DoubleSlash.defaultProps = {
  color: 'black',
};

export default DoubleSlash;
