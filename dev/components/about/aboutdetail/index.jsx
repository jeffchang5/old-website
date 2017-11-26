import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';
import AboutViews from 'components/about/views';

const AboutDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Source Code Pro', sans-serif;
  width: 90%;
  @media (min-width: 768px) {
    min-height: 400px;
  }
  
  @media (min-width: 1200px) {
    min-width: 50%;
    width: 50%;
  }
`;

const AboutDetailHeaderWrapper = styled.div``;

const AboutDetailComponent = props => (<AboutDetailWrapper>
  <AboutDetailHeaderWrapper>asdfdsfasdfsd</AboutDetailHeaderWrapper>

</AboutDetailWrapper>);

AboutDetailComponent.propTypes = {

};

export default AboutDetailComponent;
