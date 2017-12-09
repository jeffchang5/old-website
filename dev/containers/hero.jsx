import React from 'react';
import styled from 'styled-components';
import NavBar from 'components/navbar';
import Container from 'components/common/responsive_container';
import HeroGallery from 'components/hero/gallery';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-wrap: wrap;
`;


const HeroHeadlineWrapper = styled.header`
  flex-grow: 1;
`;

const HeroGallerySection = styled.header`
  background-color: red;
  flex-grow: 1;
`;

const HeroSectionWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const AboutHeadlineHeader = styled.div`
  color: #3398CA;
  font-family: 'Majestic Bold', monospace;
  font-size: 4.0em;
  font-weight: 500;
  margin: 20px 0;
`;

const HeroQuoteWrapper = styled.section``;

const HeroQuote = styled.section`
  color: #3398CA;
  font-family: 'Majestic Bold', monospace;
  font-size: 4.0em;
  font-weight: 500;
  margin: 20px 0;
`;

export default () => (
  <SectionWrapper>
    <NavBar />
    <Container style={{ flexGrow: '1' }}>
      <HeroSectionWrapper>
        <HeroGallerySection>
          <HeroQuoteWrapper>
            <HeroQuote>generic quote.</HeroQuote>
          </HeroQuoteWrapper>
          <HeroGallery />
        </HeroGallerySection>
        <HeroHeadlineWrapper>
          <AboutHeadlineHeader>Jeffrey Chang</AboutHeadlineHeader>
        </HeroHeadlineWrapper>
      </HeroSectionWrapper>
    </Container>
  </SectionWrapper>);
