import React from 'react';
import styled from 'styled-components';

const ExperienceTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const ExperienceWrapper = styled.dl`
    margin-bottom: 20px;
`;

const ExperienceTitle = styled.p`
    display: inline-block;
    margin: 0;
    font-weight: bold;
    white-space: nowrap;
    font-size: ${props => props.theme.fontsize.normal_header};
`;

const ExperienceSubHeader = styled(ExperienceTitle)`
    color: ${props => props.theme.color.secondary};
`;

const AboutDescription = styled.p`
    width: 300px;
    font-size: ${props => props.theme.fontsize.text};
`;

const ExperienceList = styled.dt`
    display: inline-block; 
    vertical-align: top;
    margin: auto;
`;

export default () => (
  <ExperienceWrapper>
    <ExperienceList>
      <ExperienceTitleWrapper>
        <ExperienceTitle>A little spontaneity</ExperienceTitle>
        <ExperienceSubHeader>&nbsp;with the propensity to get shit done.</ExperienceSubHeader>
      </ExperienceTitleWrapper>
      <AboutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </AboutDescription>
    </ExperienceList>
  </ExperienceWrapper>);
