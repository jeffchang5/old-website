import React from 'react';
import styled from 'styled-components';
import sample from 'resources/images/sample.jpg';
import { WideContainer } from 'components/common/responsive_container';

const NavBarBufferWrapper = styled.div`
  padding-top: 20vh;
`;

const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;


const AboutDescriptionWrapper = styled.div`
  height: 100%;
  background-color: #3398CA;
`;

const AboutImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const AboutSectionWrapper = styled.div`
  min-width: 400px;
  width: 50%;
  
`;


const AboutDescription = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 75%;
  margin: 0 auto;
`;

const AboutDescriptionHeaderWrapper = styled.div`
  align-self: center;
  margin: 25px 0;
`;


const AboutDescriptionHeader = styled.div`
  display: flex;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 2.5em;
  font-weight: 500;
  line-height: 35px;
  margin: 20px 0;
  min-width: 35%;
`;

export default () => (
  <NavBarBufferWrapper>
    <WideContainer>
      <AboutWrapper>
        <AboutSectionWrapper>
          <AboutImage src={sample} />
        </AboutSectionWrapper>
        <AboutSectionWrapper>
          <AboutDescriptionWrapper>
            <AboutDescription>
              <AboutDescriptionHeaderWrapper>
                <AboutDescriptionHeader>JEFFREY CHANG</AboutDescriptionHeader>
                <AboutDescriptionHeader>SOFTWARE DEVELOPER</AboutDescriptionHeader>
                <AboutDescriptionHeader>HUMMUS ENTHUAIST</AboutDescriptionHeader>
              </AboutDescriptionHeaderWrapper>
            </AboutDescription>
          </AboutDescriptionWrapper>
        </AboutSectionWrapper>
        <AboutSectionWrapper />
        <AboutSectionWrapper>
          <AboutImage src={sample} />
        </AboutSectionWrapper>
      </AboutWrapper>
    </WideContainer>
  </NavBarBufferWrapper>);
