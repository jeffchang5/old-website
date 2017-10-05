import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';

const ProjectCardWrapper = styled.div`
  min-width: 80%;
  ${devices.tablet`
    min-width: 70%;
  `};
  ${devices.desktop`
    min-width: 30%;
  `};
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  height: 100px;
  display: flex;
  margin: 1em;
  background: sandybrown;
`;

const ProjectCardLogo = styled.img`
  width: 100%;
  height: auto;
  display: flex;
`;

export default class ProjectCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showHoverBar = this.showHoverBar.bind(this);
    this.hideHoverBar = this.hideHoverBar.bind(this);
    this.state = {
      hoverBarVisible: 'hidden',
    };
  }
  showHoverBar(e) {
    e.preventDefault();
    this.setState({ hoverBarVisible: 'visible' });
  }

  hideHoverBar(e) {
    e.preventDefault();
    this.setState({ hoverBarVisible: 'hidden' });
  }
  render() {
    return (
      <ProjectCardWrapper>
        <ProjectCardLogo />
      </ProjectCardWrapper>
    );
  }
}
