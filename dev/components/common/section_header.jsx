/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import DoubleSlashIcon from 'resources/images/svg/double_slash';

const SectionHeaderWrapper = styled.div`
  display: flex;
  height: 80px;
  flex-grow: 1;
  margin: 30px 0 30px 0;
  left: 15px;
  position: relative;
  flex-direction: row;
  font-family: "Open Sans Condensed", Helvetica, Arial, sans-serif;

`;
const SectionDecoration = styled.div`
  width: 100px;
  height: 100%;
`;

const HeaderTextWrapper = styled.div`
  height: 100%;
  margin-left: 15px;
`;

const SectionHeader = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 45pt;
  height:      45px;  
  line-height: 45px;
  vertical-align: text-bottom;
`;

export default () => (
  <SectionHeaderWrapper>
    <SectionDecoration>
      <DoubleSlashIcon />
    </SectionDecoration>
    <HeaderTextWrapper>
      <SectionHeader>Projects</SectionHeader>
    </HeaderTextWrapper>
  </SectionHeaderWrapper>);
