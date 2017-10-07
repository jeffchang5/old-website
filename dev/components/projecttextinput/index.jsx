import React from 'react';
import styled from 'styled-components';

const ProjectTextInputWrapper = styled.div`
  position:relative; 
  margin-bottom:50px;
`;

const ProjectTextInput = styled.input`
  &:focus {
    outline:none;
  }
  padding:10px 10px 10px 5px;
  display:block;
  width:500px;
  border:none;
  border-bottom:1px solid #757575;
`;

const ProjectTextHighlight = styled.span`
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
`;

const ProjectTextBar = styled.span`
  position: relative;
  display: block;
  width:300px;
`;

const ProjectTextLabel = styled.label`
  &:before {
    left: 50%;
  }
  &:after{
    right: 50%;
  }
  color:#999; 
  font-family: 'Open Sans Condensed', 'Helvetica Neue', sans-serif;
  font-size: 24pt;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
`
;
export default props => (
  <ProjectTextInputWrapper>
    <ProjectTextInput />
    <ProjectTextHighlight />
    <ProjectTextBar />
    <ProjectTextLabel>Filter</ProjectTextLabel>
  </ProjectTextInputWrapper>);
