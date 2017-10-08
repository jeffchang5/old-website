import React from 'react';
import styled from 'styled-components';
import { WideContainer } from 'components/common/responsive_container';
import SectionHeader from 'components/common/section_header';
import ProjectMenu from 'components/projectsmenu';
import ProjectCard from 'components/projectcard';
import ProjectCardConfig from 'config/project_cards';


const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default () => (
  <WideContainer>
    <SectionHeader />
    <ProjectMenu />
    <ProjectCardWrapper>
      { ProjectCardConfig.map(projectCard =>
        (<ProjectCard key={projectCard.key} src={projectCard.image} />))}
    </ProjectCardWrapper>
  </WideContainer>
);
