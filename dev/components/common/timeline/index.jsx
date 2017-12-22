import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import TimelineItem from './item';

const TimelineWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;



// const TimelineDecoration = styled.div`
//   font-family: ${props => props.theme.font.sanserif};
//   font-size: 24px;
//   margin: auto 0;
//   position: absolute;
//   right: 0;
// `;

const TimelineComponent = props => (
  <TimelineWrapper>
    {props.items.map(item =>
      (<TimelineItem
        key={item.id}
        header={item.header}
        subheader={item.subheader}
      />
      ))}
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

{/*<TimeLineItemWrapper key={item.id}>*/}
  {/*<TimelineCenter>*/}
    {/*<TimelineCompanyHeader>{item.header}</TimelineCompanyHeader>*/}
    {/*<TimelineCompanySubHeader>{item.subheader}</TimelineCompanySubHeader>*/}
  {/*</TimelineCenter>*/}
{/*</TimeLineItemWrapper>*/}