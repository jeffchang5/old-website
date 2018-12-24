/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionHeader = styled.div`
  font-family: ${props => props.theme.font.header};
  font-size: 5.0em;
`;

const HeaderDecoration = styled.div`
  height: 10px;
  width: 100px;
  background: black;
  
`;
const SectionHeaderWrapper = styled.div`
  display: flex;
  height: 15vh;
  margin-top: 5%;
  flex-direction: column;
  align-items: center;
`;

const SectionHeaderComponent = props => (
  <SectionHeaderWrapper>
    <SectionHeader>{props.text}</SectionHeader>
    <HeaderDecoration />
  </SectionHeaderWrapper>

);

SectionHeaderComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeaderComponent;
