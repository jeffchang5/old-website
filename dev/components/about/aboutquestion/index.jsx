import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';

const AboutHeader = styled.div`
  display: inline-block;
  color: white;
  font-family: 'Source Code Pro', sans-serif;
  font-size: 2.2em;
  font-weight: 300;
  line-height: 35px;
  margin: 20px 0;
`;
const AboutHeaderWrapper = styled.div`
  display: flex;
  
  flex-direction: column;
  align-self: flex-end;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;
const AboutChipWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  flex-wrap: wrap;
  flex-direction: row;
  align-self: flex-start;
`;
const AboutChip = styled.div`
  display: inline-block;
  color: white;
  border-radius: 22px;
  border: 1px solid white;
  padding: 10px 15px;
  margin: 6px 4px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16pt;
  font-weight: 300;
`;
const AboutQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #C64A50;
  ${devices.tablet`
    width: 90%;
    min-height: 400px;
  `};
  ${devices.desktop`
    min-width: 50%;
    width: 50%;
  `};
`;

const AboutQuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 75%;
  height: 100%;
  margin: 0 auto;
`;
export default () => (
  <AboutQuestionWrapper>
    <AboutQuestionContainer>
      <AboutHeaderWrapper>
        <AboutHeader>Get to know me.</AboutHeader>
        <AboutHeader>I don&#39;t bite.</AboutHeader>
      </AboutHeaderWrapper>
      <AboutChipWrapper>
        <AboutChip>ABOUT</AboutChip>
        <AboutChip>EXPERIENCE</AboutChip>
        <AboutChip>SKILLS</AboutChip>
        <AboutChip>VOLUNTEER</AboutChip>
        <AboutChip>HOBBIES</AboutChip>
        <AboutChip>MUSIC</AboutChip>
      </AboutChipWrapper>
    </AboutQuestionContainer>
  </AboutQuestionWrapper>
);
