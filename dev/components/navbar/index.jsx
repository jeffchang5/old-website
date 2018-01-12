import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
// import
import devices from 'theme/devices';
import logo from 'resources/images/redbluelogo.png';
import NavItem from './nav_item';


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
  margin: 0 20px;
  background: #ccc;
`;
const MenuWrapper = styled.div`
  display: inline-block;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default () =>
  (<NavWrapper>
    <MediaQuery maxDeviceWidth={974}>
      <NavBarWrapper>
        <LogoWrapper>
          <LogoImage alt="logo" src={logo} />
        </LogoWrapper>
        <Divider />
        <MenuWrapper>Jeffrey</MenuWrapper>
      </NavBarWrapper>
    </MediaQuery>
    <MediaQuery minDeviceWidth={975}>
      <NavBarWrapper>
        <NavItem url="/" text="ABOUT" />
        <NavItem url="/" text="PROJECTS" />
        <LogoWrapper>
          <LogoImage alt="logo" src={logo} />
        </LogoWrapper>
        <NavItem url="/" text="RESUME" />
        <NavItem url="/" text="CONTACT" />
      </NavBarWrapper>
    </MediaQuery>
  </NavWrapper>);
