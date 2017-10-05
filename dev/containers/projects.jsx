import React from 'react';
import ResponsiveContainer from 'components/common/responsive_container';
import styled from 'styled-components';
import SectionHeader from 'components/common/section_header';
import ProjectCard from 'components/projectcard';

const ProjectCardwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export default () => (
  <ResponsiveContainer>
    <SectionHeader />
    <ProjectCardwrapper>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ProjectCardwrapper>
  </ResponsiveContainer>
);
