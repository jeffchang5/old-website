import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import PropTypes from 'prop-types';

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

const ProjectCardImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  filter: ${props => props.filterColor}
`;

const ProjectCardImage = styled.img`
  width: 100%;
  height: 100%;
  filter: ${props => props.filterColor}
`;

const ProjectCardTextOverlay = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: 99999;
  background-color: indianred;
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
        <ProjectCardImageWrapper>
          <ProjectCardImage
            src={this.props.project.image}
            filterColor={this.state.filterColor}
            onMouseEnter={this.toggleActiveProject}
            onMouseLeave={this.toggleActiveProject}
          />
        </ProjectCardImageWrapper>
      </ProjectCardWrapper>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    featured: PropTypes.bool,
  }),
};

ProjectCard.defaultProps = {
  project: PropTypes.shape({
    key: 'sample',
    title: 'Title',
    subtitle: 'Subtitle',
    image: '',
    category: 'android',
    featured: true,
  }),
};
