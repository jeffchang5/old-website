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
    max-width: 30%;
  `};
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1em;
`;

const ProjectCardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 55%;
  filter: ${props => props.filterColor}
`;

const ProjectCardTextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 45%;
  background-color: white;
  filter: ${props => props.filterColor}
`;

const ProjectCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: ${props => props.filterColor}
`;

const ProjectCardTextOverlay = styled.div`
  position:absolute;
  display: flex;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: 2;
  color: white;
`;

const ProjectCardTextOverlayFlexRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  width: 100%;
  align-self: center;
`;
const ProjectCardTextOverlayGitHubButton = styled.button`
  background-color: transparent;
  align-self: center;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20pt;
  padding: 0 15px;
  height: 100%;
  border: 2px solid #FFF;
  border-radius: 15px;
  color: white;
`;

export default class ProjectCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleActiveProject = this.toggleActiveProject.bind(this);
    this.state = {
      isActive: false,
      filterColor: 'none',
    };
  }
  toggleActiveProject(e) {
    e.preventDefault();
    if (this.state.isActive) {
      this.setState({
        isActive: false,
        filterColor: 'none',
      });
    } else {
      this.setState({
        isActive: true,
        filterColor: 'url("#cyan_filter") blur(3px)',
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
          />
          <ProjectCardTextOverlay
            onMouseEnter={this.toggleActiveProject}
            onMouseLeave={this.toggleActiveProject}
          >
            <ProjectCardTextOverlayFlexRow>
              <ProjectCardTextOverlayGitHubButton>
                View on GitHub
              </ProjectCardTextOverlayGitHubButton>
            </ProjectCardTextOverlayFlexRow>
          </ProjectCardTextOverlay>
        </ProjectCardImageWrapper>
        <ProjectCardTextWrapper>

        </ProjectCardTextWrapper>
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
