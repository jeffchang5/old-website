import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from 'components/common/section_header';
import ResponsiveContainer from 'components/common/responsive_container';

import AboutComponent from 'components/about';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-wrap: wrap;
`;

const Container = styled.div`
    max-width: 860px;
    margin: 0 auto;
    padding: 0 20px;
    height: 100%;
`;

const AboutSectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const AboutMetaOptionComponent = (props) => {
  if (props.card != null) {
    return (
      <AboutCard
        date={props.card.date}
        description={props.card.description}
        header={props.card.header}
        subheader={props.card.subheader}
      />);
  }
  return (
    <AboutOptionComponent
      active={props.option.activeId}
      onMenuItemClicked={props.option.onMenuItemClicked}
      items={props.option.items}
    />
  );
};

AboutMetaOptionComponent.propTypes = ({
  option:
    PropTypes.shape({
      activeId: PropTypes.string.isRequired,
      onMenuItemClicked: PropTypes.func.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ),
    }),
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
});

class About extends Component {
  render() {
    return (
      <ResponsiveContainer ref={(section) => { this.section = section; }}>
        <Container>
          <SectionHeader text="About" />
          <AboutSectionWrapper>
            <AboutWrapper>
              <AboutComponent />
            </AboutWrapper>
          </AboutSectionWrapper>
        </Container>
      </ResponsiveContainer>
    );
  }
}
About.propTypes = {
  card_details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default About;
