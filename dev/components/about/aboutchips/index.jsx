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
  //margin: px 0;
`;
const AboutHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-content: flex-end;
`;

const AboutHeaderWrapper = styled.div`
  display: flex;
  align-self: center;
  //border-bottom: 5px solid #ef5350;
  padding-bottom: 20px;
  margin-top: 20px;
  flex-direction: column;
`;

const AboutChipWrapper = styled.div`
  display: flex;
  align-content: center;
  flex: 1;
  margin: 30px 0;
  flex-wrap: wrap;

`;
const AboutChip = styled.div`
  display: inline-block;
  cursor: pointer; 
  background: ${props => (props.active ? '#ef53501A' : 'white')};
  color: #ef5350;
  max-height: 60px;
  border-radius: 35px;
  border: 1px solid #ef5350;
  padding: 10px 18px;
  margin: 8px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20pt;
  font-weight: 300;
`;

const AboutChipSection = styled.section`
  display: flex;
  align-self: center;
  margin: 0 40px;
  flex: 1;
  flex-direction: column;
  max-width: 80%;
`;

const AboutChipBarDecoration = styled.div`
  min-width: 100px;
  width: 50%;
  height: 15px;
  background: #ef5350;
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
      <AboutChipBarDecoration />
      <AboutChipWrapper>
        { props.items.map((item) => {
          if (item.id === props.active) {
            return <AboutChip active key={item.id}>{item.name}</AboutChip>;
          }
          return (
            <AboutChip
              onClick={() => props.callback(item.id)}
              key={item.id}
            >{item.name}
            </AboutChip>);
        }) }
      </AboutChipWrapper>
    </AboutChipSection>
    <Bracket color="#ef5350" />
  </AboutChipContainer>
);

AboutChipComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  active: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AboutChipComponent;
