import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const NavItem = styled.a`
  font-family: ${props => props.theme.font.sanserif};
  font-weight: 200;
  font-size: 15pt;
  padding-top: 10px;
`;

const NavHoverBar = styled.div`
  height: 4px;
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
    this.toggleHoverBar = this.toggleHoverBar.bind(this);
    this.state = {
      hoverBarVisible: 'hidden',
    };
  }
  toggleHoverBar(e) {
    e.preventDefault();
    const toggle = !(this.state.hoverBarVisible === 'visible') ? 'visible' : 'hidden';
    this.setState({ hoverBarVisible: toggle });
  }
  render() {
    return (<NavWrapper>
      <NavHoverBar hoverBarVisible={this.state.hoverBarVisible} />
      <NavItem
        href={this.props.url}
        onMouseEnter={this.toggleHoverBar}
        onMouseLeave={this.toggleHoverBar}
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
