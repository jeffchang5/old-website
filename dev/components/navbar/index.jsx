import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import DropDownIcon from 'components/common/dropdown';
import devices from 'theme/devices';
import logo from 'resources/images/redbluelogo.png';
import NavItem from './nav_item';
import MenuDropDown from './menu_dropdown';


const NavWrapper = styled.div`
   display: flex;
  width: 100%;
  z-index: 99999;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #ccc;
  
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

const openMenu = e => {
  const bottomOfMenuBar = e.target.getBoundingClientRect().bottom;
};

const unwrapTitle = (property, key) => {
  if (property !== undefined) {
    return property[key];
  } return '';
};
const NavBar = props =>
  (<NavWrapper>
    <MediaQuery maxDeviceWidth={974}>
      <NavBarWrapper>
        <LogoWrapper>
          <LogoImage alt="logo" src={logo} />
        </LogoWrapper>
        <Divider />
        <MenuCenter>
          <MenuWrapper onClick={e => openMenu(e)}>
            <MenuTitleWrapper>Hello World</MenuTitleWrapper>
            <DropDownWrapper>
              <DropDownIcon />
            </DropDownWrapper>
          </MenuWrapper>
        </MenuCenter>
      </NavBarWrapper>
      {/*<MenuDropDown />*/}
    </MediaQuery>
    <MediaQuery minDeviceWidth={975}>
      <NavBarWrapper>
        {props.navBarItems.slice(1).map(navBarItem =>
          (<NavItem
            key={navBarItem.title}
            scrollTop={navBarItem.scroll.top}
            text={navBarItem.title}
          />))
        }
        <LogoWrapper>
          <LogoImage alt="logo" src={logo} />
        </LogoWrapper>
        <NavItem url="" text="RESUME" />
        <NavItem url="/" text="CONTACT" />
      </NavBarWrapper>
    </MediaQuery>
  </NavWrapper>);

NavBar.propTypes = {
  navBarItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    scroll: PropTypes.shape({
      top: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
};
export default NavBar;
