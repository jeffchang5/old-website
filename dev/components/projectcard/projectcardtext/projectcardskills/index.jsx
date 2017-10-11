import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCategories from 'config/project_categories';
import SlashDecoration from 'resources/images/double_slash';

const ProjectSkillsWrapper = styled.div`
  display: flex;
  margin: 4px 2px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 15pt;
  flex-direction: row;
`;

const ProjectDecorationWrapper = styled.div`
  height: 30px;
`;

const DecorationWrapper = styled.div`
  width: 20px;
  height: 100%;
  margin: 0 6px;
`;

const ProjectTextWrapper = styled.div`
  height: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const ProjectDecorationAndTextWrapper = styled.div`
  display: flex;
  height: 100%;
  font-size: 15pt;
  flex-direction: row;
`;

const createSkillBarComponent = (category, skills) => {
  const skillBar = skills.map((skill, position) => {
    if (position === skills.length - 1) {
      return (
        <ProjectTextWrapper key={skill}>
          {skill}
        </ProjectTextWrapper>);
    }
    return (
      <ProjectDecorationAndTextWrapper key={skill}>
        <ProjectTextWrapper>{skill}</ProjectTextWrapper>
        <ProjectDecorationWrapper>
          <DecorationWrapper>
            <SlashDecoration color={ProjectCategories[category].accentColor} />
          </DecorationWrapper>
        </ProjectDecorationWrapper>
      </ProjectDecorationAndTextWrapper>);
  });
  return (
    <ProjectSkillsWrapper>
      { skillBar.map(skill => skill) }
    </ProjectSkillsWrapper>);
};

const ProjectCardSkillsComponent = props => (createSkillBarComponent(props.category, props.skills));

ProjectCardSkillsComponent.propTypes = {
  category: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCardSkillsComponent;
