import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import scrollTo from 'theme/scrollto';

const NavItem = styled.a`
  font-family: ${props => props.theme.font.sanserif};
  font-weight: 200;
  font-size: 15pt;
  margin: 0 20px;
`;

const NavHoverBar = styled.div`
  height: 5px;
  width: 50%;
  margin-bottom: 10px;
  background-color: #000000CC;
  visibility: ${props => props.hoverBarVisible};
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  flex-direction: column;
`;

class NavItemComponent extends React.Component {
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
    const opts = {};
    if (this.props.isDownload) {
      opts.download = '';
    }
    return (
      <NavWrapper
        onClick={() => scrollTo(document.scrollingElement, this.props.scrollTop, 1000)}
      >
        <NavHoverBar hoverBarVisible={this.state.hoverBarVisible} />
        <NavItem
          href={this.props.url}
          onMouseEnter={this.toggleHoverBar}
          onMouseLeave={this.toggleHoverBar}
          {...opts}
        >{this.props.text}
        </NavItem>
      </NavWrapper>);
  }
}

NavItemComponent.propTypes = {
  scrollTop: PropTypes.number,
  url: PropTypes.string,
  text: PropTypes.string,
  isDownload: PropTypes.bool,
};

NavItemComponent.defaultProps = {
  text: 'Text',
};

export default NavItemComponent;
