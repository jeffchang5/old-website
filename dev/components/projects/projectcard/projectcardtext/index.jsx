import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCardSkills from './projectcardskills';


const ProjectCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 35px;
  font-family: 'Lora', serif;
  font-size: 15pt;
  max-width: 90%;
  height: 50%;
  background-color: white;
`;

const ProjectCardDescription = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 200;
  flex-grow: 1;
  font-size: 15pt;
`;


const ProjectCardTextHeader = styled.div`
  font-family: 'Lora', sans-serif;
  font-size: 18pt;
`;

const ProjectCardTextComponent = props => (
  <ProjectCardTextWrapper>
    <ProjectCardTextHeader>{props.header}</ProjectCardTextHeader>
    <ProjectCardSkills category={props.category} skills={props.skills} />
    <ProjectCardDescription>{props.description}</ProjectCardDescription>
  </ProjectCardTextWrapper>
);

ProjectCardTextComponent.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
};

export default ProjectCardTextComponent;
