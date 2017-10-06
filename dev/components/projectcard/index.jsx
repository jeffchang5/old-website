import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import PropTypes from 'prop-types';
import MHacksProjectImage from 'resources/images/projects/mhacks_android.png';

const ProjectCardWrapper = styled.div`
  max-width: 80%;
  ${devices.tablet`
    max-width: 70%;
  `};
  ${devices.desktop`
    max-width: 28%;
  `};
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  height: 500px;
  display: flex;
  margin: 1em;
  filter: ${props => props.filterColor}
`;

const ProjectCardLogo = styled.img`
  width: 100%;
  height: auto;
  display: flex;
`;

export default class ProjectCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleActiveProject = this.toggleActiveProject.bind(this);
    this.state = {
      isActive: false,
      filterColor: 'grayscale(100%) blur(2px)',
    };
  }
  toggleActiveProject(e) {
    e.preventDefault();
    if (this.state.isActive) {
      this.setState({
        isActive: false,
        filterColor: 'grayscale(100%) blur(2px)',
      });
    } else {
      this.setState({
        isActive: true,
        filterColor: 'none',
      });
    }
  }
  render() {
    return (
      <ProjectCardWrapper filterColor={this.state.filterColor}>
        <ProjectCardLogo
          src={this.props.src}
          onMouseEnter={this.toggleActiveProject}
          onMouseLeave={this.toggleActiveProject}
        />
      </ProjectCardWrapper>
    );
  }
}

ProjectCard.propTypes = {
  src: PropTypes.string,
};

ProjectCard.defaultProps = {
  src: MHacksProjectImage,
};
