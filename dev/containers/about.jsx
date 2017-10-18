import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import SectionHeader from 'components/common/section_header';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 400px;

  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  height: 90vh;
  
  padding-left: 15px;
  padding-right: 15px;
  width: 100vh;
  
  @media (min-width: 768px) {
    width: 750px;
    
  @media (min-width: 992px) {
    width: 1000px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;


const AboutSectionWrapper = styled.div`
  width: 100%;
  
`;

const AboutQuestionWrapper = styled.div`
  flex-grow: 1;
  background-color: #C64A50;
  ${devices.desktop`
    min-width: 20%;
  `};
`;

const AboutTextWrapper = styled.div`
  flex-grow: 1;
  background-color: aliceblue;
`;

export default () => (
  <Container>
    <AboutSectionWrapper>
      <SectionHeader text="About" />
      <AboutWrapper>
        <AboutQuestionWrapper>
          {/* <AboutDescriptionHeaderWrapper> */}

          {/* </AboutDescriptionHeaderWrapper> */}
        </AboutQuestionWrapper>
        <AboutTextWrapper>
          Hello
        </AboutTextWrapper>
      </AboutWrapper>
    </AboutSectionWrapper>
  </Container>
);
