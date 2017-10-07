import React from 'react';
import styled from 'styled-components';
import { WideContainer } from 'components/common/responsive_container';
import SectionHeader from 'components/common/section_header';
import ProjectCard from 'components/projectcard';
import ProjectCardConfig from 'config/projects_card';
import ProjectTextInput from 'components/projecttextinput';

const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default () => (
  <WideContainer>
    <SectionHeader />
    <ProjectTextInput />
    <ProjectCardWrapper>
      { ProjectCardConfig.map(projectCard =>
        (<ProjectCard key={projectCard.key} src={projectCard.image} />))}
    </ProjectCardWrapper>
  </WideContainer>
);
