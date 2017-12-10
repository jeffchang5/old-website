/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SectionHeader = styled.div`
  font-family: 'Majestic Bold', 'Roboto', sans-serif;;
  font-size: 5.0em;
`;

const HeaderDecoration = styled.div`
  height: 10px;
  width: 60%;
  background: black;
  
`;
const SectionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
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
