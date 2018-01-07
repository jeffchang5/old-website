import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const AboutCardWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 5px 5px #ccc;
  }
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 7px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const AboutCard = props => (
  <AboutCardWrapper>
    <CardWrapper>
      <h1>{props.header}</h1>
      <h6>{props.date}</h6>
      <p>{props.description}</p>
    </CardWrapper>

  </AboutCardWrapper>);

AboutCard.propTypes = {
  header: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutCard;
