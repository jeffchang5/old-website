import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectMenuItemWrapper = styled.div`
`;
const ProjectMenuItem = styled.a``;

const ProjectMenuItemComponent = props => (
  <ProjectMenuItemWrapper>
    <ProjectMenuItem onClick={() => props.onClick(props.id)}>
      {props.name}
    </ProjectMenuItem>
  </ProjectMenuItemWrapper>
);


ProjectMenuItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ProjectMenuItemComponent.defaultProps = {
  name: 'Android',
};

export default ProjectMenuItemComponent;
