import React from 'react';
import styled from 'styled-components';
import sample from 'resources/images/sample.jpg';
import Container from 'components/common/responsive_container';

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
  @media (min-width: 768px) {
    width: 90%;
    
  //@media (min-width: 992px) {
  //  width: 90%;
  //}
  @media (min-width: 1200px) {
    min-width: 50%;
    width: 50%;
  }
  width: 90%;
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
    <Container>
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
                <AboutDescriptionHeader>HUMMUS ENTHUSIAST</AboutDescriptionHeader>
              </AboutDescriptionHeaderWrapper>
            </AboutDescription>
          </AboutDescriptionWrapper>
        </AboutSectionWrapper>
        <AboutSectionWrapper />
        <AboutSectionWrapper>
          <AboutImage src={sample} />
        </AboutSectionWrapper>
      </AboutWrapper>
    </Container>
  </NavBarBufferWrapper>);
