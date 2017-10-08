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

export default class ProjectsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'ios',
    };
  }
  menuCallback(category) {
    console.log(category);
  }
  render() {
    return (
      <WideContainer>
        <SectionHeader />
        <ProjectMenu callback={this.menuCallback()} />
        <ProjectCardWrapper>
          {ProjectCardConfig
            .filter(projectCard => projectCard.category === this.state.category)
            .map(projectCard =>
              (<ProjectCard key={projectCard.key} src={projectCard.image} />))}
        </ProjectCardWrapper>
      </WideContainer>
    );
  }
}

