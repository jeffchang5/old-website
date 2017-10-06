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
      active: 'true',
    };
  }
  showHoverBar(e) {
    e.preventDefault();
    this.setState({ active: 'visible' });
  }

  hideHoverBar(e) {
    e.preventDefault();
    this.setState({ active: 'hidden' });
  }
  render() {
    return (
      <ProjectCardWrapper>
        <ProjectCardLogo src={this.props.src} />
      </ProjectCardWrapper>
    );
  }
}

ProjectCard.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  src: PropTypes.string,
  // text: PropTypes.string,
};

ProjectCard.defaultProps = {
  src: MHacksProjectImage,
  // text: '',
};
