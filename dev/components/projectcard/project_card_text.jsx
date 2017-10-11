import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCardSkills from './projectcardskills';


const ProjectCardTextWrapper = styled.div`
  position: relative;
  margin: 25px 25px;
  font-family: 'Lora', sans-serif;
  font-size: 20pt;
  max-width: 90%;
  height: 50%;
  background-color: white;
`;


const ProjectCardTextHeader = styled.div``;

const ProjectCardTextComponent = props => (
  <ProjectCardTextWrapper>
    <ProjectCardTextHeader>{props.header}</ProjectCardTextHeader>
    <ProjectCardSkills skills={props.skills} />
  </ProjectCardTextWrapper>
);

ProjectCardTextComponent.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProjectCardTextComponent;
