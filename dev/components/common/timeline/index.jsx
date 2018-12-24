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

const TimelineComponent = props => (
  <TimelineWrapper>
    {props.items.map(item =>
      (<TimelineItem
        key={item.id}
        id={item.id}
        header={item.header}
        subheader={item.subheader}
        description={item.description}
        date={item.date}
        onSubMenuSelected={props.onSubMenuSelected}
      />
      ))}
  </TimelineWrapper>
);

TimelineComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
  })).isRequired,
  onSubMenuSelected: PropTypes.func.isRequired,
};

export default TimelineComponent;
