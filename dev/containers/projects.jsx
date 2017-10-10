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
    this.menuCallback = this.menuCallback.bind(this);
    this.state = {
      category: 'default',
    };
  }

  filterAndMapProjectCards(projectCardList) {
    let cardList;
    if (this.state.category === 'default') cardList = projectCardList;
    else {
      cardList = projectCardList
        .filter(projectCard => projectCard.category === this.state.category);
    }
    return cardList.map(projectCard =>
      (<ProjectCard key={projectCard.key} project={projectCard} />));
  }

  menuCallback(category) {
    this.setState({
      category,
    });
  }

  render() {
    return (
      <WideContainer>
        <SectionHeader />
        <ProjectMenu callback={this.menuCallback} />
        <ProjectCardWrapper>
          { this.filterAndMapProjectCards(ProjectCardConfig) }
        </ProjectCardWrapper>
      </WideContainer>
    );
  }
}

