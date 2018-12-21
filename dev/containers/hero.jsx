import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from 'components/navbar';
import HeroGallery from 'components/hero/gallery';
import Portrait from 'resources/images/portfolio.png';
import devices from 'theme/devices';

const SectionWrapper = styled.div`
  ${devices.desktop`
    height: 100vh;
   `};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;


const HeroHeadlineWrapper = styled.header`
  ${devices.small`
    margin: 50px 0;
 `};
  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 3;
`;

const HeroQuoteSection = styled.header`
  flex: 4;
  margin: 0 7%;
  min-width: 40%;
`;

const HeroSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const AboutPortfolioHeader = styled.div`
  display: inline-block;
  color: #3398CA;
  white-space: nowrap;
  margin: 10px 0 0 0;
  font-family: 'Majestic Bold', monospace;
  font-size: 8vw;
  font-weight: 500;
  ${devices.desktop`
    font-size: 4.0em;
 `};
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
 
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  
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
  flex-shrink: initial;
  max-width: 300px;
  max-height: 350px;
  
`;
const HeroPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  
  ${devices.small`
    // align-content: center;
 `};
`;

const AboutSubHeader = styled.div`
  position: relative;
`;

const AboutPortfolioSubHeaderWrapper = styled.div`
  display: inline-block;
  max-width: 400px;
  white-space: nowrap;
  font-family: ${props => props.theme.font.sanserif};
  font-size: 2.2em;
  font-weight: 200;
  border-top: 1px solid #ccc;
  padding: 10px 0;
`;

const HeroCenter = styled.div`
  ${devices.small`
    margin: 20px auto;
   `};
    ${devices.desktop`
    margin: 0 0;
   `};
`;

// eslint-disable-next-line react/prefer-stateless-function
class Hero extends Component {
  render() {
    return (
      <SectionWrapper ref={(section) => { this.section = section; }}>
        <NavBar
          navBarItems={this.props.navBarItems}
          isFirstChildScrolled={this.props.isFirstChildScrolled}
          isDownScroll={this.props.isDownScroll}
        />
        <Container style={{ flexGrow: '1', background: '#F5F5F5' }}>
          <HeroSectionWrapper>
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
              <HeroCenter>
                <HeroPortfolio>
                  <HeroPortrait src={Portrait} />
                  <AboutPortfolioHeader>Jeffrey Chang</AboutPortfolioHeader>
                  <AboutPortfolioSubHeaderWrapper>
                    <AboutSubHeader>Data Scientist</AboutSubHeader>
                    <AboutSubHeader>Developer</AboutSubHeader>
                    <AboutSubHeader>Student</AboutSubHeader>
                  </AboutPortfolioSubHeaderWrapper>
                </HeroPortfolio>
              </HeroCenter>
            </HeroHeadlineWrapper>
          </HeroSectionWrapper>
        </Container>
      </SectionWrapper>);
  }
}
Hero.propTypes = {
  isFirstChildScrolled: PropTypes.bool,
  isDownScroll: PropTypes.bool,
  navBarItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    scroll: PropTypes.shape({
      top: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
};
export default Hero;
