import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlashDecoration from 'resources/images/double_slash';

const ProjectSkillsWrapper = styled.div`
  display: flex;
  margin: 4px 2px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 15pt;
  flex-direction: row;
`;

const ProjectDecorationWrapper = styled.div`

`;

const DecorationWrapper = styled.div`
  width: 15px;
  height: 100%;
  margin: 0 6px;
`;

const ProjectDecorationTextWrapper = styled.div`
`;

const ProjectNoDecorationWrapper = styled.div`
  display: flex;
  font-size: 15pt;
  flex-direction: row;
`;

const createSkillBarComponent = (category, skills) => {
  console.log(category);
  const skillBar = skills.map((skill, position) => {
    if (position === skills.length - 1) {
      return (
        <ProjectDecorationWrapper>
          {skill}
        </ProjectDecorationWrapper>);
    }
    return (
      <ProjectNoDecorationWrapper>
        <ProjectDecorationTextWrapper>{skill}</ProjectDecorationTextWrapper>
        <ProjectDecorationWrapper>
          <DecorationWrapper>
            <SlashDecoration color={category} />
          </DecorationWrapper>
        </ProjectDecorationWrapper>
      </ProjectNoDecorationWrapper>);
  });
  return (
    <ProjectSkillsWrapper>
      { skillBar.map(skill => <div>{skill}</div>) }
    </ProjectSkillsWrapper>);
};

const ProjectCardSkillsComponent = props => (createSkillBarComponent(props.category, props.skills));

ProjectCardSkillsComponent.propTypes = {
  category: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCardSkillsComponent;
