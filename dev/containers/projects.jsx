import React from 'react';
import styled from 'styled-components';
import { WideContainer } from 'components/common/responsive_container';
import SectionHeader from 'components/common/section_header';
import ProjectCard from 'components/projectcard';
import ProjectCardConfig from 'config/projects_card';

const ProjectCardwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default () => (
  <WideContainer>
    <SectionHeader />
    <ProjectCardwrapper>
      {
        ProjectCardConfig.map(projectCard =>
          (<ProjectCard key={projectCard.key} src={projectCard.image} />))
      }
    </ProjectCardwrapper>
  </WideContainer>
);
