/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import DoubleSlashIcon from 'resources/images/svg/double_slash';
import PropTypes from 'prop-types';

const SectionHeaderWrapper = styled.div`
  display: flex;
  height: 80px;
  flex-grow: 1;
  margin: 30px 0 30px 0;
  left: 15px;
  position: relative;
  flex-direction: row;
  font-family: 'Fira Sans', 'Roboto', sans-serif;;

`;
const SectionDecoration = styled.div`
  width: 100px;
  height: 100%;
`;

const HeaderTextWrapper = styled.div`
  height: 100%;
`;

const SectionHeader = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 50pt;
  height:      45px;  
  line-height: 45px;
  vertical-align: text-bottom;
`;

const SectionHeaderComponent = props => (
  <SectionHeaderWrapper>
    <SectionDecoration>
      <DoubleSlashIcon />
    </SectionDecoration>
    <HeaderTextWrapper>
      <SectionHeader>{props.text}</SectionHeader>
    </HeaderTextWrapper>
  </SectionHeaderWrapper>);

SectionHeaderComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeaderComponent;
