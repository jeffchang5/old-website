import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectMenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectMenuDecorationWrapper = styled.div`
  margin: 1px 12px;
  height: 12px;
  width: 12px;
`;

const ProjectMenuDecoration = styled.svg`
  & circle {
    fill: ${props => props.decorationColor}  
  }
  width: 100%;
  height: 100%;
`;
const ProjectMenuItem = styled.a``;

const ProjectMenuItemComponent = props => (
  <ProjectMenuItemWrapper onClick={() => props.onClick(props.id)}>
    <ProjectMenuItem>
      {props.name}
    </ProjectMenuItem>
    <ProjectMenuDecorationWrapper>
      <ProjectMenuDecoration
        viewBox="0 0 200 200"
        decorationColor={props.decorationColor}
      >
        <circle cx="100" cy="100" r="100" />
      </ProjectMenuDecoration>
    </ProjectMenuDecorationWrapper>
  </ProjectMenuItemWrapper>
);


ProjectMenuItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  decorationColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

ProjectMenuItemComponent.defaultProps = {
  name: 'Android',
};

export default ProjectMenuItemComponent;
