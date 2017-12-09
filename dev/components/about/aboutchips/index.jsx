import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import devices from 'theme/devices';

const AboutHeader = styled.div`
  display: inline-block;
  color: #ef5350;
  font-family: 'Fira Sans', sans-serif;
  font-size: 2.2em;
  font-weight: 500;
  line-height: 35px;
  margin: 20px 0;
`;
const AboutHeaderWrapper = styled.div`
  display: flex;
  
  flex-direction: column;
  align-self: flex-end;
  padding-bottom: 10px;
  border-bottom: 5px solid #ef5350;
`;
const AboutChipWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  flex-wrap: wrap;
  flex-direction: row;
  align-self: flex-start;
`;
const AboutChip = styled.div`
  display: inline-block;
  color: #ef5350;
  border-radius: 22px;
  border: 1px solid #ef5350;
  padding: 10px 15px;
  margin: 6px 4px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16pt;
  font-weight: 300;
`;
const AboutQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #CCC;
  border-radius: 7px 7px 0 0
;
  ${devices.tablet`
    width: 90%;
    min-height: 400px;
  `};
  ${devices.desktop`
    min-width: 50%;
    width: 50%;
  `};
`;

const AboutQuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 75%;
  height: 100%;
  margin: 0 auto;
`;

const AboutChipComponent = props => (
  <AboutQuestionWrapper>
    <AboutQuestionContainer>
      <AboutHeaderWrapper>
        <AboutHeader>Get to know me.</AboutHeader>
        <AboutHeader>I don&#39;t bite.</AboutHeader>
      </AboutHeaderWrapper>
      <AboutChipWrapper>
        { props.items.map(item => (
          <AboutChip key={item.id}>
            {item.name}
          </AboutChip>)) }
      </AboutChipWrapper>
    </AboutQuestionContainer>
  </AboutQuestionWrapper>
);

AboutChipComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AboutChipComponent;
