import React from 'react';
import styled from 'styled-components';
import WideContainer from 'components/common/responsive_container';

export default class ProjectsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.menuCallback = this.menuCallback.bind(this);
  }

  menuCallback(category) {
    this.setState({
      category,
    });
  }

  render() {
    return (
      <WideContainer ref={(section) => { this.section = section; }}>
      </WideContainer>
    );
  }
}

