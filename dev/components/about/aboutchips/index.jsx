import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import devices from 'theme/devices';
import Bracket from 'resources/images/svg/bracket';

const AboutHeader = styled.div`
  display: inline-block;
  color: #ef5350;
  font-family: 'Majestic Bold', sans-serif;
  font-size: 4.5em;
  font-weight: 500;
  line-height: 35px;
  margin: 30px 0;
`;
const AboutHeaderContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  align-content: flex-end;
  border-bottom: 5px solid #ef5350;
  //align-content: flex-end;
`;

const AboutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const AboutChipWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 30px 0;
  flex-wrap: wrap;
`;
const AboutChip = styled.div`
  display: inline-block;
  color: #ef5350;
  border-radius: 35px;
  border: 1px solid #ef5350;
  padding: 10px 18px;
  margin: 8px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20pt;
  font-weight: 300;
`;

const AboutChipSection = styled.section`
  align-self: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 85%;
`;

const AboutChipContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 30px;
`;

const AboutChipComponent = props => (
  <AboutChipContainer>
    <AboutChipSection>
      <AboutHeaderContainer>
        <AboutHeaderWrapper>
          <AboutHeader>Get to know me.</AboutHeader>
          <AboutHeader>I don&#39;t bite.</AboutHeader>
        </AboutHeaderWrapper>
      </AboutHeaderContainer>
      <AboutChipWrapper>
        { props.items.map(item => (
          <AboutChip key={item.id}>
            {item.name}
          </AboutChip>)) }
      </AboutChipWrapper>
    </AboutChipSection>
    <Bracket color="#ef5350" />
  </AboutChipContainer>
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
