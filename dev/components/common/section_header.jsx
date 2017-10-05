/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 175px;
  position: relative;
  left: 15px;
  top: 30px;
  font-family: "Open Sans Condensed", Helvetica, Arial, sans-serif;
`;
const SectionDecoration = styled.div`
  font-size: 75pt;
  line-height: 175px;
  vertical-align: text-bottom;
`;

const SectionHeader = styled.div`
  margin-left: 15px;
  font-size: 45pt;
  line-height: 175px;
  vertical-align: text-bottom;
 
`;

export default () => (
  <SectionHeaderWrapper>
    <SectionDecoration>//</SectionDecoration>
    <SectionHeader>Projects</SectionHeader>
  </SectionHeaderWrapper>);
