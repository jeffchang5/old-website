import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import PropTypes from 'prop-types';
import ProjectCardImage from './project_card_image';
import ProjectCardText from './project_card_text';

const ProjectCardWrapper = styled.div`
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 5px 5px #ccc;
  }
  max-width: 80%;
  ${devices.small`

    max-width: 65%;
    height: 450px;
  `};
  ${devices.tablet`
    max-width: 65%;
    height: 450px;
  `};
  ${devices.desktop`
    max-width: 30%;
    height: 525px;
  `};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 7px;
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1em;
`;


export default class ProjectCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleActiveProject = this.toggleActiveProject.bind(this);
    this.state = {
      isActive: false,
      filterColor: 'none',
      buttonVisible: 'hidden',
    };
  }
  toggleActiveProject(e) {
    e.preventDefault();
    if (this.state.isActive) {
      this.setState({
        isActive: false,
        filterColor: 'none',
        buttonVisible: 'hidden',
      });
    } else {
      this.setState({
        isActive: true,
        filterColor: 'url("#cyan_filter") blur(3px)',
        buttonVisible: 'visible',

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
        <ProjectCardImage
          image={this.props.project.image}
          filterColor={this.state.filterColor}
          toggleActiveProject={this.toggleActiveProject}
          buttonVisible={this.state.buttonVisible}
        />
        <ProjectCardText
          header={this.props.project.header}
          description={this.props.project.description}
          skills={this.props.project.skills}
          category={this.props.project.category}
        />
      </ProjectCardWrapper>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    featured: PropTypes.bool,
    header: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.array,
    category: PropTypes.string,
  }).isRequired,
};
