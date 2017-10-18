import React, { Component } from 'react';
import styled from 'styled-components';
import AboutItems from 'config/about_items';
import devices from 'theme/devices';
import SectionHeader from 'components/common/section_header';
import AboutChipComponent from 'components/about/aboutquestion';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 450px;

  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 175px auto;
  height: 90%;
  
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

const AboutTextWrapper = styled.div`
  background-color: aliceblue;
  @media (min-width: 768px) {
  min-height: 400px;
  }
    width: 90%;
    
  @media (min-width: 1200px) {
    min-width: 50%;
    width: 50%;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section_id: 0,
    };
  }
  render() {
    return (<Container>
      <AboutSectionWrapper>
        <SectionHeader text="About" />
        <AboutWrapper>
          <AboutChipComponent />
          <AboutTextWrapper>
            Hello
          </AboutTextWrapper>
        </AboutWrapper>
      </AboutSectionWrapper>
    </Container>);
  }
}
