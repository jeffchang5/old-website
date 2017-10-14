import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ProjectClearSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 25px;
  justify-content: flex-end;
`;
const ProjectClearButtonWrapper = styled.div`
  display: flex;
  position: relative;
  height: 40px;
  margin: 0 0 -16px 0;
  width: 140px;
  cursor: pointer;
`;

const ProjectButtonBottomWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const ProjectClearIcon = styled.svg`
  height: 30px;
  width: 30px;
  stroke: #37474F;
  fill: transparent;
  stroke-linecap: butt;
  stroke-width: 2;
`;
const ProjectClearButton = styled.div`
  line-height: 30px;
  font-size: 20pt;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 100;
  padding: 0;
  border: none;
  background: none;
`;

const ProjectClearButtonComponent = props => (
  <ProjectClearSectionWrapper>
    <ProjectButtonBottomWrapper>
      <ProjectClearButtonWrapper onClick={() => props.callback}>
        <ProjectClearIcon viewBox="0 0 40 40">
          <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </ProjectClearIcon>
        <ProjectClearButton>CLEAR</ProjectClearButton>
      </ProjectClearButtonWrapper>
    </ProjectButtonBottomWrapper>
  </ProjectClearSectionWrapper>
);

ProjectClearButtonComponent.propTypes = {
  callback: PropTypes.func.isRequired,
};
export default ProjectClearButtonComponent;

