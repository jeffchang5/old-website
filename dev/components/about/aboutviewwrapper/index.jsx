import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import devices from 'theme/devices';
import AboutViews from 'components/about/views';

const AboutDetailWrapper = styled.div`
  width: 65%;
`;

const Container = styled.div`
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
const AboutHeader = styled.div`
  
  font-family: 'Fira Sans',sans-serif;
  margin: 10% 0 0;
  padding-bottom: 10px;
  font-size: 3em;  
`;
const AboutDetailHeaderWrapper = styled.div`
`;

const AboutDetailComponent = props => (
  <Container>
    <AboutDetailWrapper>
      <AboutDetailHeaderWrapper>
        <AboutHeader title={props.title}>Brief</AboutHeader>
        {/*<AboutBody></AboutBody>*/}
      </AboutDetailHeaderWrapper>
    </AboutDetailWrapper>
  </Container>
);

AboutDetailComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
};

export default AboutDetailComponent;
