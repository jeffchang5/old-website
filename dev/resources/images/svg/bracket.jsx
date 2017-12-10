import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Bracket = styled.svg`
  width: 100%;
  height: auto;
  
& path {
  fill: ${props => props.color}
}
`;

const BracketDecoration = props => (
  <Bracket color={props.color} viewBox="0 0 184.9 37.3">
    <path d="M13.6,24.1L171.2,24V0h13.7v37.3H0V0h13.6V24.1z" />
  </Bracket>
);
BracketDecoration.propTypes = {
  color: PropTypes.string,
};

BracketDecoration.defaultProps = {
  color: 'black',
};

export default BracketDecoration;
