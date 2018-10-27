import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.dl`
    margin-bottom: 20px;
`;

const ExperienceTitle = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 1.2rem;
`;

const ExperienceCompany = styled.p``;

const ExperiencePeriod = styled.p``;

const ExperienceList = styled.dt`
    display: inline-block; 
    vertical-align: top; 
    margin-bottom: 20px;
`;


export default () => (
  <ExperienceWrapper>
    <ExperienceList>
      <ExperienceTitle>asdfkjl</ExperienceTitle>
      <ExperienceCompany>dfdf</ExperienceCompany>
      <ExperiencePeriod>dfdf</ExperiencePeriod>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </ExperienceList>
  </ExperienceWrapper>);
