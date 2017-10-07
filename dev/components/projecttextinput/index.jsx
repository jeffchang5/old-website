import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProjectTextInputWrapper = styled.div`
  position:relative; 
  margin-bottom:50px;
  
`;

export const inputHighlighter = keyframes`
  from { background:#5264AE; }
  to { 
    width:0;
    background:transparent; 
  }
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
  &:before, &:after {
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:#5264AE; 
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
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
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
`;


const ProjectTextInput = styled.input`
  &:focus { 
    outline:none;
  }
  &:focus ~ ${ProjectTextHighlight} {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
  }
  
  &:focus ~ ${ProjectTextLabel}, &:valid ~ ${ProjectTextLabel} {
    top:-20px;
    font-size:14px;
    color:#5264AE;
  }
  
  &:focus ~ ${ProjectTextBar}:before, &:focus ~ ${ProjectTextBar}:after { 
    width:50%;
  }
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
`;

export default props => (
  <ProjectTextInputWrapper>
    <ProjectTextInput type="text" required />
    <ProjectTextHighlight />
    <ProjectTextBar />
    <ProjectTextLabel>Filter</ProjectTextLabel>
  </ProjectTextInputWrapper>);
