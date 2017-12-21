import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const TimelineWrapper = styled.div`
  max-height: 100%;
  overflow: auto;
`;
const TimeLineItemWrapper = styled.div`

  // ::before {
  //   display: block;
  //   position: absolute;
  //   content: '';
    
  //   width: 100%;
  //   height: 1px;
  //  
  //   left: 0;
  // }
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 0;
`;
// background: ${props => props.theme.color.secondary};r
const TimelineCompanyName = styled.header`
  font-family: ${props => props.theme.font.sanserif};
  font-size: 2.5em;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.color.secondary};
  
`;
const TimelineCompanyPosition = styled.div`
  font-family: ${props => props.theme.font.sanserif};
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
`;

const TimelineComponent = props => (
  <TimelineWrapper>
    {props.items.map(item =>
      (<TimeLineItemWrapper key={item.id}>
        <TimelineCompanyName>{item.header}</TimelineCompanyName>
        <TimelineCompanyPosition>{item.subheader}</TimelineCompanyPosition>
      </TimeLineItemWrapper>))}
  </TimelineWrapper>);

TimelineComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
  })).isRequired,
  callback: PropTypes.func.isRequired,
};

export default TimelineComponent;
