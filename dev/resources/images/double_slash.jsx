import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SlashImage = styled.svg`
  width: 100%;
  height: 100%;
  
  & path {
    
  }
`;

const DoubleSlash = props => (
  <SlashImage color={props.color} viewBox="0 0 8.08 8.49">
    <path d="M0,8.69,3.35,0h.82L.8,8.69Z" />
    <path d="M4.12,8.69,7.46,0h.82L4.92,8.69Z" />
  </SlashImage>
);
DoubleSlash.propTypes = {
  color: PropTypes.string.isRequired,
};

export default DoubleSlash;