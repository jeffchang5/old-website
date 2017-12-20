import React from 'react';
import styled from 'styled-components';
import NavBar from 'components/navbar';
import HeroGallery from 'components/hero/gallery';
import Portrait from 'resources/images/portfolio.png';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-wrap: wrap;
`;


const HeroHeadlineWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 3;
`;

const HeroQuoteSection = styled.header`
  flex: 4;
  margin: 0 85px;
`;

const HeroSectionWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const AboutPortfolioHeader = styled.div`
  color: #3398CA;
  white-space: nowrap;
  margin: 10px 0 0 0;
  font-family: 'Majestic Bold', monospace;
  font-size: 4.0em;
  font-weight: 500;
`;

const HeroSegmentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  min-height: 80%;
  width: 100%;
  background: #F5F5F5;
  z-index: -1;
`;

const HeroQuoteHat = styled.div`
  margin-top: 12%;
  height: 10px;
  width: 100px;
  background: #c60039;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex:1 0 0;
  margin-right: auto;
  margin-left: auto;
  
  padding-left: 15px;
  padding-right: 15px;
  
`;

const HeroQuoteWrapper = styled.section`
  flex: 1;
  position: relative;
  &:before {
    font-family: Georgia, serif;
    position: relative;
    font-size: 10em;
    top: 45px;
    color: #c54a50;
    left: 0;
    content: "\\201C";
    line-height: 100px;
    vertical-align: bottom;
  }
  &:after {
    font-family: Georgia, serif;
    position: relative;
    font-size: 10em;
    top: 70px;
    line-height: 50px;
    color: #c54a50;
    left: -10px;
    content: '\\201D';
    vertical-align: top;
  }
`;

const HeroQuote = styled.blockquote`
  color: #c54a50;
  display: inline;
  font-family: ${props => props.theme.font.header};
  font-size: 3.0em;
  hyphens: auto;
  font-weight: 200;
  margin: 15px 0 0;
  position: relative;
  padding: 15px 15px 0;
`;

const Divider = styled.div`
  display: block;
  height: 1px;
  width: auto;
  background: #CCC;
  margin: 40px 30px 0 0;
`;

const HeroQuoteCitation = styled.div`
  font-family: ${props => props.theme.font.sanserif};
  font-weight: 200;
  text-align: right;
  margin-right: 25px;
  font-size: 2.2em;
  margin-top: 20px;
`;
const HeroPortrait = styled.img`
  width: auto;
  align-self: flex-end;
  flex-shrink: initial;
  max-width: 300px;
  max-height: 350px;
  
`;
const HeroPortfolio = styled.section`
  flex: 1;
`;

const AboutSubHeader = styled.div`
  position: relative;
`;

const AboutPortfolioSubHeaderWrapper = styled.div`
  max-width: 400px;
  white-space: nowrap;
  font-family: ${props => props.theme.font.sanserif};
  font-size: 2.2em;
  font-weight: 200;
  border-top: 1px solid #ccc;
  padding: 10px 0;
`;


export default () => (
  <SectionWrapper>
    <NavBar />
    <Container style={{ flexGrow: '1' }}>
      <HeroSectionWrapper>
        <HeroSegmentBackground />
        <HeroQuoteSection>
          <HeroQuoteHat />
          <HeroQuoteWrapper>
            <HeroQuote>We have always held to the hope, the belief,
              the conviction that there is a better life, a better world,
              beyond the horizon.
            </HeroQuote>
          </HeroQuoteWrapper>
          <Divider />
          <HeroQuoteCitation>Franklin D. Roosevelt</HeroQuoteCitation>
          <HeroGallery />
        </HeroQuoteSection>
        <HeroHeadlineWrapper>
          <HeroPortfolio>
            <HeroPortrait src={Portrait} />
            <AboutPortfolioHeader>Jeffrey Chang</AboutPortfolioHeader>
            <AboutPortfolioSubHeaderWrapper>
              <AboutSubHeader>Data Scientist</AboutSubHeader>
              <AboutSubHeader>Developer</AboutSubHeader>
              <AboutSubHeader>Student</AboutSubHeader>
            </AboutPortfolioSubHeaderWrapper>
          </HeroPortfolio>
        </HeroHeadlineWrapper>
      </HeroSectionWrapper>
    </Container>
  </SectionWrapper>);
