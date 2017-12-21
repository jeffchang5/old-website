import React from 'react';
import styled from 'styled-components';

const GeneralSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  color: #2b2b2b;
  font-weight: 300;
  align-self: center;
`;

const AboutSubHeader = styled.div`
  font-family: ${props => props.theme.font.subheader};
  align-self: center;
  display: inline-block;
  padding: 15px 0;
  margin-top: 20px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-size: 2.0em;
`;

const AboutBody = styled.div`
  font-family: ${props => props.theme.font.sanserif};
  color: ${props => props.theme.color.text};
  align-self: center;
  display: inline-block;
  margin-top: 20px;
  font-size: 1.75em;
`;

export default () => (
  <GeneralSectionWrapper>
    <AboutSubHeader>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus metus.
    </AboutSubHeader>
    <AboutBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus metus.
    </AboutBody>
  </GeneralSectionWrapper>
);

