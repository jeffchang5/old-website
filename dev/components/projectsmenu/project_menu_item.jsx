import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectMenuItemWrapper = styled.div`

`;
const ProjectMenuItem = styled.a``;

const ProjectMenuItemComponent = props => (
  <ProjectMenuItemWrapper>
    <ProjectMenuItem>{props.name}</ProjectMenuItem>
  </ProjectMenuItemWrapper>
);

ProjectMenuItemComponent.propTypes = {
  name: PropTypes.string,
};

ProjectMenuItemComponent.defaultProps = {
  name: 'Android',
};


export default ProjectMenuItemComponent;
