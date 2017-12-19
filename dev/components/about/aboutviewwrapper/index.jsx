import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AboutView from 'components/about/views';
import devices from 'theme/devices';

const AboutDetailWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  align-self: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (min-width: 768px) {
    min-height: 400px;
  }
  @media (min-width: 1200px) {
    min-width: 50%;
    width: 50%;
  }
`;
const AboutHeader = styled.h1`
  display: inline;
  color: #3398CA;
  margin: 100px 0 20px 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 4.5em;
  padding: 0 10px 10px 0;
`;

const AboutDetailComponent = props => (
  <Container>
    <AboutDetailWrapper>
      <AboutHeader>{props.data.name}</AboutHeader>
      <AboutView id={props.data.id} />
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
