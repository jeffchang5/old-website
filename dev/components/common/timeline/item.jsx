import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const TimelineCenter = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-self: center;
  cursor: pointer;
`;
const TimelineCompanyHeader = styled.header`
  display: inline-block;
  font-family: ${props => props.theme.font.sanserif};
  font-size: 2.5em;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.color.secondary};
  
`;
const TimelineCompanySubHeader = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.font.sanserif};
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
`;

const TimeLineItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 0;
`;

const TimeLineItemDecoration = styled.div`
    visibility: ${props => props.isActive};
    position: absolute;
    color: #ccc;
    line-height: 20px;
    margin-bottom: 1rem;
    font-size: 5em;
    letter-spacing: 5px;
    padding: 5px 0;
    right: 4vh;
    top: 20%;
`;

export default class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.onMouseHover = this.onMouseHover.bind(this);
    this.state = {
      isActive: 'hidden',
    };
  }

  onMouseHover(e) {
    e.preventDefault();
    const toggle = (this.state.isActive === 'hidden') ? 'visible' : 'hidden';
    this.setState({ isActive: toggle });
  }
  render() {
    return (<TimeLineItemWrapper>
      <TimelineCenter
        onClick={() => this.props.onSubMenuSelected(
          this.props.id,
          this.props.header,
          this.props.subheader,
          this.props.description,
          this.props.date)}
        onMouseEnter={e => this.onMouseHover(e)}
        onMouseLeave={e => this.onMouseHover(e)}
      >
        <TimelineCompanyHeader>{this.props.header}</TimelineCompanyHeader>
        <TimelineCompanySubHeader>{this.props.subheader}</TimelineCompanySubHeader>
        <TimeLineItemDecoration isActive={this.state.isActive}>...</TimeLineItemDecoration>
      </TimelineCenter>
    </TimeLineItemWrapper>);
  }
}

TimelineItem.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onSubMenuSelected: PropTypes.func.isRequired,
};
