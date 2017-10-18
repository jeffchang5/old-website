import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';

const AboutHeader = styled.div`
  display: inline-block;
  color: #E1F5FE;
  font-family: 'Playfair Display', sans-serif;
  font-size: 2.5em;
  font-weight: 500;
  line-height: 35px;
  margin: 20px 0;
`;
const AboutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const AboutQuestionWrapper = styled.div`
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
  flex-direction: column;
  width: 75%;
  margin: 40px auto;
`;
export default () => (
  <AboutQuestionWrapper>
    <AboutQuestionContainer>
      <AboutHeaderWrapper>
        <AboutHeader>Get to know me.</AboutHeader>
        <AboutHeader>I don&#39;t bite.</AboutHeader>
      </AboutHeaderWrapper>
    </AboutQuestionContainer>
  </AboutQuestionWrapper>
);
