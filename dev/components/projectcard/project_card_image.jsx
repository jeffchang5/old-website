import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectCardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 55%;
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
  &:focus {
    outline: none;
  }

  visibility: ${props => props.buttonVisible};
  background-color: transparent;
  align-self: center;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20pt;
  padding: 0 15px;
  height: 100%;
  border: 2px solid #FFF;
  border-radius: 18px;
  color: white;
`;

const ProjectCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: ${props => props.filterColor}
`;

const ProjectCardImageComponent = props => (
  <ProjectCardImageWrapper>
    <ProjectCardImage
      src={props.image}
      filterColor={props.filterColor}
    />
    <ProjectCardTextOverlay
      onMouseEnter={props.toggleActiveProject}
      onMouseLeave={props.toggleActiveProject}
    >
      <ProjectCardTextOverlayFlexRow>
        <ProjectCardTextOverlayGitHubButton buttonVisible={props.buttonVisible}>
          View on GitHub
        </ProjectCardTextOverlayGitHubButton>
      </ProjectCardTextOverlayFlexRow>
    </ProjectCardTextOverlay>
  </ProjectCardImageWrapper>
);

ProjectCardImageComponent.propTypes = {
  filterColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  toggleActiveProject: PropTypes.func.isRequired,
  buttonVisible: PropTypes.string.isRequired,
};

export default ProjectCardImageComponent;
