import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import Container from 'components/common/responsive_container';
import SectionHeader from 'components/common/section_header';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const AboutSectionWrapper = styled.div`
  ${devices.desktop`
    min-width: 50%;
    width: 50%;
  `};
  background-color: aliceblue;
  min-height: 400px;
`;

const AboutDescriptionHeaderWrapper = styled.div`
  align-self: center;
  margin: 25px 0;
`;

export default () => (
  <Container>
    <SectionHeader text="About" />
    <AboutWrapper>
      <AboutSectionWrapper>
        <AboutDescriptionHeaderWrapper>

        </AboutDescriptionHeaderWrapper>
      </AboutSectionWrapper>
      <AboutSectionWrapper>
      </AboutSectionWrapper>
    </AboutWrapper>
  </Container>
);
