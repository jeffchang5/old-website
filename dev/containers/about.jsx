import React, { Component } from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';/**/
import PropTypes from 'prop-types';
import SectionHeader from 'components/common/section_header';
import AboutChipComponent from 'components/about/aboutchips';
import AboutDetail from 'components/about/aboutviewwrapper';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  
  padding-left: 15px;
  padding-right: 15px;
  width: 100vw;
`;


const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
  width: 100%;
`;

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_item: 'general',
    };
  }
  // aboutCallback(viewComponent) {
  // }
  render() {
    return (<Container>
      <SectionHeader text="About" />
      <AboutSectionWrapper>
        <AboutWrapper>
          <AboutChipComponent items={this.props.items} />
          <AboutDetail />
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
