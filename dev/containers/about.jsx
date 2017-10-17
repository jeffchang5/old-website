import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import Container from 'components/common/responsive_container';
import SectionHeader from 'components/common/section_header';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;

  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
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
  </Container>
);
