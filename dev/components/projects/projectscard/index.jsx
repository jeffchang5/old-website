import styled from 'styled-components';
import React from 'react';

const ProjectCard = styled.div`
   &:hover {	
     box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 5px 5px #ccc;	
   }
    height: 325px;
    width: 700px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);	
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);	
    border-radius: 7px;	
`;

const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 75px;
    padding-bottom: 75px;
`;

export default () => (
  <ProjectContainer>
    <ProjectCard>
      adfsdf
    </ProjectCard>
  </ProjectContainer>
);
