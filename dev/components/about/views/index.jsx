import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import General from './general';
import Experience from './experience';
import Skills from './skills';
import Volunteer from './volunteer';
import Hobbies from './hobbies';
import Music from './music';

const AboutViewWrapper = styled.div`
  flex: 1;
  max-height: 100%;
`;
const AboutViews = {
  general: General,
  experience: Experience,
  skills: Skills,
  volunteer: Volunteer,
  hobbies: Hobbies,
  music: Music,
};

const AboutView = (props) => {
  const View = AboutViews[props.id];
  return (
    <AboutViewWrapper>
      <View />
    </AboutViewWrapper>);
};

AboutView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AboutView;
