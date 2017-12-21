import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AboutView from 'components/about/views';
import devices from 'theme/devices';

const AboutDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  flex: 3;
  margin: 40px 0;
  flex-direction: column;
  @media (min-width: 768px) {
    min-height: 400px;
  }
  @media (min-width: 1200px) {
    min-width: 50%;
    width: 50%;
  }
`;
const AboutHeader = styled.div`
  color: #3398CA;
  flex: 3;
  text-align: center;
  font-family: ${props => props.theme.font.header};
  font-size: 4.5em;
  padding: 15px 10px 10px 0;
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
