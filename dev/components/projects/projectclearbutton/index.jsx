import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectClearButtonWrapper = styled.div`
  
`;
const ProjectClearButton = styled.button`
  &:focus {
    outline: none;
  }
  right: 15px;
  float: right;
  border: none;
  background: none;
`;
const ProjectClearButtonComponent = props => (
  <ProjectClearButtonWrapper>
    <ProjectClearButton onClick={() => props.callback}>CLEAR</ProjectClearButton>
  </ProjectClearButtonWrapper>
);

ProjectClearButtonComponent.propTypes = {
  callback: PropTypes.func.isRequired,
};
export default ProjectClearButtonComponent;

