import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Bracket = styled.svg`
  position: relative;
  bottom: 30px;
  width: 100%;
  height: auto;
  
& path {
  fill: ${props => props.color}
}
`;

const BracketDecoration = props => (
  <Bracket color={props.color} viewBox="0 0 184.9 37.3">
    <path d="M8.6,29.1L176.2,29V0h8.7v37.3H0V0h8.6V29.1z"/>
  </Bracket>yarn 
);
BracketDecoration.propTypes = {
  color: PropTypes.string,
};

BracketDecoration.defaultProps = {
  color: 'black',
};

export default BracketDecoration;
