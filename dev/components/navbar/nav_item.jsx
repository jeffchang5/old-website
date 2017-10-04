import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const NavItem = styled.a`
  &:hover {
    color:salmon;
  }
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18pt;
`;

const NavHoverBar = styled.div`
  height: 3px;
  width: 100%;
  background-color: salmon;
  visibility: ${props => props.hoverBarVisible};
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 30px 0 30px;
`;

class NavComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showHoverBar = this.showHoverBar.bind(this);
    this.hideHoverBar = this.hideHoverBar.bind(this);
    this.state = {
      hoverBarVisible: 'hidden',
    };
  }
  showHoverBar(e) {
    e.preventDefault();
    this.setState({ hoverBarVisible: 'visible' });
  }

  hideHoverBar(e) {
    e.preventDefault();
    this.setState({ hoverBarVisible: 'hidden' });
  }
  render() {
    return (<NavWrapper>
      <NavHoverBar hoverBarVisible={this.state.hoverBarVisible} />
      <NavItem
        href={this.props.url}
        onMouseEnter={this.showHoverBar}
        onMouseLeave={this.hideHoverBar}
      >{this.props.text}</NavItem>
    </NavWrapper>);
  }
}


NavComponent.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

NavComponent.defaultProps = {
  url: 'http://www.google.com/',
  text: 'Google',
};

export default NavComponent;
