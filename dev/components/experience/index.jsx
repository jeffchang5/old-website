import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.dl`
`;

const ExperienceTitle = styled.p`
    margin: 0;
    font-weight: bold;
    text-align: center;
    font-size: ${props => props.theme.fontsize.normal_header};
`;

const ExperienceQuote = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExperienceSubHeader = styled(ExperienceTitle)`
    color: ${props => props.theme.color.secondary};
`;

const AboutDescription = styled.p`
    font-size: ${props => props.theme.fontsize.text};
`;

const ExperienceList = styled.dt`
    display: inline-grid;
    grid-template-columns: 1fr 2fr;
    align-content: center;
    margin-top: 5%;
    grid-gap: 45px;
`;

export default () => (
  <ExperienceWrapper>
    <ExperienceList>

      <ExperienceQuote>
        <ExperienceTitle>A little spontaneity</ExperienceTitle>
        <ExperienceSubHeader>with the propensity to get shit done.</ExperienceSubHeader>
      </ExperienceQuote>

      <AboutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </AboutDescription>

      <ExperienceQuote>
        <ExperienceTitle>A little spontaneity</ExperienceTitle>
        <ExperienceSubHeader>with the propensity to get shit done.</ExperienceSubHeader>
      </ExperienceQuote>
      
      <AboutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </AboutDescription>
    </ExperienceList>
  </ExperienceWrapper>);
