import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import PropTypes from 'prop-types';
import MHacksProjectImage from 'resources/images/projects/mhacks_android.png';

const ProjectCardWrapper = styled.div`
  max-width: 80%;
  ${devices.tablet`
    max-width: 65%;
  `};
  ${devices.desktop`
    max-width: 28%;
  `};
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1em;
  background-color: aquamarine;
`;

const ProjectCardLogo = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  filter: ${props => props.filterColor}
`;

export default class ProjectCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleActiveProject = this.toggleActiveProject.bind(this);
    this.state = {
      isActive: false,
      filterColor: 'url(\'#cyan_filter\') blur(3px)',
    };
  }
  toggleActiveProject(e) {
    e.preventDefault();
    if (this.state.isActive) {
      this.setState({
        isActive: false,
        filterColor: 'url(\'#cyan_filter\') blur(3px)',
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
      <ProjectCardWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
          <filter id="cyan_filter">
            <feColorMatrix
              type="matrix"
              values="0.4 0 0.3 0 0
              0 0.5 0 0 0
              0 0 0.8 0 0
              1 0 0 1 0 "
            />
          </filter>
        </svg>
        <ProjectCardLogo
          filterColor={this.state.filterColor}
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
