import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import PropTypes from 'prop-types';
import ProjectCardImage from './projectcardimage';
import ProjectCardText from './projectcardtext';

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
        filterColor: `url(#${this.props.project.category}-filter) blur(2px)`,
        buttonVisible: 'visible',
      });
    }
  }
  render() {
    return (
      <ProjectCardWrapper>
        <ProjectCardImage
          image={this.props.project.image}
          filterColor={this.state.filterColor}
          toggleActiveProject={this.toggleActiveProject}
          buttonVisible={this.state.buttonVisible}
          category={this.props.project.category}
          github={this.props.project.github}
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
    github: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
