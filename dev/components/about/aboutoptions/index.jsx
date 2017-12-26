import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AboutOptionWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  align-content: center;
  margin: 30px 0;
  flex-wrap: wrap;

`;
const AboutOption = styled.div`
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

const AboutOptionSection = styled.section`
  display: flex;
  align-self: flex-start;
  flex: 1;
  flex-direction: column;
`;

const AboutOptionContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const AboutOptionComponent = props => (
  <AboutOptionContainer>
    <AboutOptionSection>
      <AboutOptionWrapper>
        { props.items.map((item) => {
          if (item.id === props.active) {
            return <AboutOption active key={item.id}>{item.name}</AboutOption>;
          }
          return (
            <AboutOption
              onClick={() => props.onMenuItemClicked(item.id)}
              key={item.id}
            >{item.name}
            </AboutOption>);
        }) }
      </AboutOptionWrapper>
    </AboutOptionSection>
  </AboutOptionContainer>
);

AboutOptionComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  active: PropTypes.string.isRequired,
};

export default AboutOptionComponent;
