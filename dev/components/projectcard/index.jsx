import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';

const ProjectCardWrapper = styled.div`

  ${devices.tablet`
    min-width: 50%;
  `};
  
  ${devices.desktop`
    min-width: 33.3333%;
  `};
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  height: 100px;
  display: flex;
  background: sandybrown;
`;
export default () => (
  <ProjectCardWrapper>

  </ProjectCardWrapper>

);
