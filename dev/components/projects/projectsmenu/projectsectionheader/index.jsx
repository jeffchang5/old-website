/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import DoubleSlashIcon from 'resources/images/svg/double_slash';
import PropTypes from 'prop-types';
import ProjectClearButton from './projectclearbutton';

const ProjectSectionHeaderWrapper = styled.div`
  display: flex;
  position: relative;
  height: 80px;
  flex-grow: 1;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 30px 0 30px 0;
  left: 15px;
  flex-direction: row;
  font-family: 'Helvetica Neue', 'Roboto Condensed', sans-serif;

`;
const SectionDecoration = styled.div`
  width: 100px;
  height: 100%;
`;
const HeaderWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const HeaderTextWrapper = styled.div`
  height: 100%;
  width: 150px;
  font-family: 'Fira Sans', 'Roboto', sans-serif;
  font-weight: 400;

`;

const SectionHeader = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 50pt;
  height:      45px;  
  line-height: 45px;
  vertical-align: text-bottom;
`;

const ProjectSectionHeader = props => (
  <ProjectSectionHeaderWrapper>
    <HeaderWrapper>
      <SectionDecoration>
        <DoubleSlashIcon />
      </SectionDecoration>
      <HeaderTextWrapper>
        <SectionHeader>Projects</SectionHeader>
      </HeaderTextWrapper>
    </HeaderWrapper>
    <ProjectClearButton
      clearActive={props.clearActive}
      callback={props.callback}
    />
  </ProjectSectionHeaderWrapper>);

ProjectSectionHeader.propTypes = {
  callback: PropTypes.func.isRequired,
  clearActive: PropTypes.string.isRequired,
};

export default ProjectSectionHeader;
