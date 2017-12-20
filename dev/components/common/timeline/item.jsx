import styled from 'styled-components';
import React from 'react';

const TimeLineItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TimelineCompanyName = styled.header``;
const TimelineCompanyPosition = styled.div``;
const TimelineContent = styled.p`
  &::before {
    display: block;
    position: absolute;
    content: '';
    background: ${props => props.theme.color.secondary};
    width: 4vw;
    height: 1px;
    left: 0;
    top: 1rem;
  }
  position: relative;
  font-family: ${props => props.theme.font.sanserif};
  padding-left: 5vw;
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