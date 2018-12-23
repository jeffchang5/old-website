import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import DropDownIcon from 'components/common/dropdown';
import { slideUp, slideDown } from 'theme/animations';
import { css } from 'styled-components';
import devices from 'theme/devices';
import Logo from 'resources/images/redbluelogo.png';
import Resume from 'resources/pdfs/Resume.pdf';
import NavItem from './nav_item';
import MenuDropDown from './menu_dropdown';

// Only toggles if it is past first scrolled component and if the user is scrolling down.
const navBarAnimation = css`
  ${props => props.isFirstChildScrolled ? (props.isDownScroll ? slideUp : slideDown) : 'none'} 
  .7s cubic-bezier(0.19, 1, 0.22, 1) forwards;
`;

// Uses negative absolute positioning to hide component when in fixed positioning downwards.
// Otherwise, causes an animation when scrolled past the height of the first element.
const fixInitialAnimation = (props) => {
  if (props.isFirstChildScrolled && props.isDownScroll) {
    return '-125px';
  } else if (props.isFirstChildScrolled && !props.isDownScroll) {
    return '0px';
  }
  return null;
};

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 99999;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #ccc;
  position: ${props => (props.isFirstChildScrolled ? 'fixed' : 'inline-block')};
  animation: ${navBarAnimation};
  top: ${props => fixInitialAnimation(props)};
  transition: ${props => (props.isFirstChildScrolled ? 'all' : 'none')};
  
  ${devices.desktop`
    font-size: 4.0em;
    min-height: 100px;
 `};
`;

const NavBarWrapper = styled.nav`
  width: 100%;
  margin: 20px 0;
  display: flex;
  ${devices.desktop`
    align-items: center;
    justify-content: center;
  `}; 
`;

const LogoWrapper = styled.div`
  display: inline-flex;
  width: 75px;
  min-width: auto;
  min-height: auto;
  margin: 0 20px;
  flex-direction: column;
  align-items: center;
  
  ${devices.desktop`
    width: 100px;
    min-width: auto;
    min-height: auto;
    margin: 0 20px;
  `}; 
`;

const Divider = styled.div`
  height: 50px;
  width: 1px;
  margin-left: 20px;
  background: #ccc;
`;

const MenuCenter = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${props => props.theme.font.sanserif};
  font-size: 2em;
  flex-grow: 1;
`;

const MenuTitleWrapper = styled.div`
  display: inline-block;
`;

const DropDownWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin: 2px 15px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-self: center;
`;

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_title: 'Jeffrey Chang',
      isDropDownVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ ...this.state, isDropDownVisible: false });
    });
  }
  toggleMenu() {
    this.setState({ ...this.state, isDropDownVisible: !this.state.isDropDownVisible });
  }

  render() {
    return (<NavWrapper
      isFirstChildScrolled={this.props.isFirstChildScrolled}
      isDownScroll={this.props.isDownScroll}
    >
      <MediaQuery maxDeviceWidth={974}>
        <NavBarWrapper>
          <LogoWrapper>
            <LogoImage alt="logo" src={Logo} />
          </LogoWrapper>
          <Divider />
          <MenuCenter>
            <MenuWrapper onClick={() => this.toggleMenu()}>
              <MenuTitleWrapper>Hello World</MenuTitleWrapper>
              <DropDownWrapper>
                <DropDownIcon />
              </DropDownWrapper>
            </MenuWrapper>
          </MenuCenter>
        </NavBarWrapper>
        <MenuDropDown isVisible={this.state.isDropDownVisible} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={975}>
        <NavBarWrapper>
          {this.props.navBarItems.slice(1).map(navBarItem =>
            (<NavItem
              key={navBarItem.title}
              scrollTop={navBarItem.scroll.top}
              text={navBarItem.title}
            />))
          }
          <LogoWrapper>
            <LogoImage alt="logo" src={Logo} />
          </LogoWrapper>
          <NavItem url={Resume} text="RESUME" />
          <NavItem
            url="mailto:me@jeffchang.io?Subject=Hey,%20I%20saw%20your%20website!"
            text="CONTACT"
          />
        </NavBarWrapper>
      </MediaQuery>
    </NavWrapper>);
  }
}

NavBarComponent.propTypes = {
  isFirstChildScrolled: PropTypes.bool,
  isDownScroll: PropTypes.bool,
  navBarItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    scroll: PropTypes.shape({
      top: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
};
export default NavBarComponent;
