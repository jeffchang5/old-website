import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ProjectCardImageWrapper = styled.div`

  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
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
  
  &:hover {
    outline: none;
    background-color: rgba(255,255,255, .25);
    cursor: pointer;
  }

  visibility: ${props => props.buttonVisible};
  background-color: transparent;
  color: white;
  align-self: center;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20pt;
  padding: 0 15px;
  height: 100%;
  border: 1px solid #FFF;
  border-radius: 18px;
`;

const ProjectCardImage = styled.img`
  width: 102%;
  height: 102%;
  object-fit: cover;
  z-index: 1;
  margin: -5px -10px -10px -5px;
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
        <ProjectCardTextOverlayGitHubButton
          buttonVisible={props.buttonVisible}
          onClick={() => { location.href = props.github; }}
        >
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
  github: PropTypes.string.isRequired,
};

export default ProjectCardImageComponent;
