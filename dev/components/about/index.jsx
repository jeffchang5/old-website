import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.dl`
`;

const AboutTitle = styled.p`
    margin: 0;
    font-weight: bold;
    text-align: center;
    font-size: ${props => props.theme.fontsize.normal_header};
`;

const AboutQuote = styled.div`
    display: flex;
    flex-direction: column;
`;

const BlueSubHeader = styled(AboutTitle)`
    color: ${props => props.theme.color.secondary};
`;

const RedSubHeader = styled(AboutTitle)`
    color: ${props => props.theme.color.primary};
`;

const AboutDescription = styled.p`
    font-size: ${props => props.theme.fontsize.text};
`;

const AboutList = styled.dt`
    margin-top: 30px;
    display: inline-grid;
    grid-template-columns: 1fr 2fr;
    align-content: center;
    margin-top: 5%;
    grid-gap: 45px;
`;

export default () => (
  <AboutWrapper>
    <AboutList>

      <AboutQuote>
        <AboutTitle>A little spontaneity</AboutTitle>
        <BlueSubHeader>with the propensity to get shit done.</BlueSubHeader>
      </AboutQuote>

      <AboutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </AboutDescription>

      <AboutQuote>
        <AboutTitle>A little spontaneity</AboutTitle>
        <RedSubHeader>with the propensity to get shit done.</RedSubHeader>
      </AboutQuote>

      <AboutDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </AboutDescription>
    </AboutList>
  </AboutWrapper>);
