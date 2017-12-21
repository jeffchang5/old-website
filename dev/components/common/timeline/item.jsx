import styled from 'styled-components';
import React from 'react';

const TimeLineItemWrapper = styled.div`

  ::before {
    display: block;
    position: absolute;
    content: '';
    background: ${props => props.theme.color.secondary};
    width: 100%;
    height: 1px;
    
    left: 0;
  }
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TimelineCompanyName = styled.header`
  font-family: ${props => props.theme.font.subheader};
  font-size:${props => props.theme.fontsize.header};
  color:${props => props.theme.color.secondary};
`;
const TimelineCompanyPosition = styled.div`
  font-family: ${props => props.theme.font.sanserif};
  font-size:${props => props.theme.fontsize.subheader};
  color: ${props => props.theme.color.text};
`;
const TimelineContent = styled.p`
  &::before {
    display: block;
    position: absolute;
    content: '';
    background: ${props => props.theme.color.secondary};
    width: 3vw;
    height: 1px;
    left: 0;
    top: 1rem;
  }
  position: relative;
  font-family: ${props => props.theme.font.sanserif};
  font-size:${props => props.theme.fontsize.text};
  color: ${props => props.theme.color.text};
  padding-left: 4vw;
  margin: 10px 0;
`;

export default (props) => {
  return (
    <TimeLineItemWrapper>
      <TimelineCompanyName>MHacks</TimelineCompanyName>
      <TimelineCompanyPosition>Android Developer</TimelineCompanyPosition>
      <TimelineContent>
        A major pharmaceutical company with a recently established government affairs presence.
      </TimelineContent>

    </TimeLineItemWrapper>);
}