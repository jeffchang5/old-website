import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import devices from 'theme/devices';
import AboutItems from 'config/about_items';
import AboutViews from 'components/about/views';

const AboutDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
const AboutBody = styled.div`
  background-color: blue;
`;

const AboutDetailComponent = props => (
  <Container>
    <AboutDetailWrapper>
      <AboutHeader>{props.data.name}</AboutHeader>
      <AboutBody />
    </AboutDetailWrapper>
  </Container>
);

AboutDetailComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutDetailComponent;
