import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import devices from 'theme/devices';
import Bracket from 'resources/images/svg/bracket';

const AboutHeader = styled.div`
  display: inline-block;
  color: #ef5350;
  font-family: ${props => props.theme.font.header};
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
  padding-bottom: 20px;
  margin-top: 20px;
  flex-direction: column;
`;

const AboutChipWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  align-content: center;
  margin: 30px 0;
  flex-wrap: wrap;

`;
const AboutChip = styled.div`
  cursor: pointer; 
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  color: #ef5350;
  max-height: 60px;
  padding: 10px 18px;
  margin: 16px;
  font-family: ${props => props.theme.font.header};
  font-size: ${props => (props.active ? props.theme.fontsize.large_header : props.theme.fontsize.header)};
  font-weight: 300;
  transition: all 0.2s ease-in-out;;
`;

const AboutChipSection = styled.section`
  display: flex;
  align-self: flex-start;
  flex: 1;
  flex-direction: column;
`;

const AboutChipContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: ;
`;

const AboutChipComponent = props => (
  <AboutChipContainer>
    <AboutChipSection>
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
};

export default AboutChipComponent;
