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
  flex-grow: 1;
`;

const HeroSectionWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const AboutHeadlineHeader = styled.div`
  text-align: end;
  color: #3398CA;
  margin-top: 25%;
  white-space: nowrap;
  font-family: 'Majestic Bold', monospace;
  font-size: 4.0em;
  font-weight: 500;
`;

const HeroQuoteWrapper = styled.section``;

const HeroQuote = styled.section`
  color: #3398CA;
  font-family: 'Majestic Bold', monospace;
  font-size: 4.0em;
  font-weight: 500;
  margin: 20px 0;
`;

const AboutSubHeader = styled.div`
  //display: inline-block;
  //float: right;
  //clear: right;
  font-family: 'Majestic Book Italic', sans-serif;
  font-size: 2.5em;
  //font-style: italic;
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
          <AboutSubHeader>Data Scientist.</AboutSubHeader>
          <AboutSubHeader>Developer.</AboutSubHeader>
          <AboutSubHeader>Student.</AboutSubHeader>
        </HeroHeadlineWrapper>
      </HeroSectionWrapper>
    </Container>
  </SectionWrapper>);
