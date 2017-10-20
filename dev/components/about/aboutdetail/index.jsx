import React from 'react';
import styled from 'styled-components';
import devices from 'theme/devices';

const
  AboutDetailWrapper = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    min-height: 400px;
  }
  
  @media (min-width: 1200px) {
    min-width: 50%;
    width: 50%;
  }
`;

const AboutDetailComponent = (props) => {
  return (
    <AboutDetailWrapper />
  );
};

AboutDetailComponent.propTypes = {

};

export default AboutDetailComponent;
