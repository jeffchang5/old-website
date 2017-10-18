import React, { Component } from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import PropTypes from 'prop-types';
import SectionHeader from 'components/common/section_header';
import AboutChipComponent from 'components/about/aboutchips';
import AboutDetailWrapper from 'components/about/aboutdetail';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 450px;

  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const BlueWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
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

  ${devices.tablet`
    width: 750px
  `};

  ${devices.tablet`
    width: 1000px;
  `};

  ${devices.desktop`
    width: 1200px;
  `}
`;


const AboutSectionWrapper = styled.div`
  width: 100%;
`;

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_item: 0,
    };
  }
  render() {
    return (<Container>
      <AboutSectionWrapper>
        <SectionHeader text="About" />
        <AboutWrapper>
          <AboutChipComponent items={this.props.items} />
          { AboutDetailWrapper(this.props.items, BlueWrapper) }
        </AboutWrapper>
      </AboutSectionWrapper>
    </Container>);
  }
}

AboutComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AboutComponent;
