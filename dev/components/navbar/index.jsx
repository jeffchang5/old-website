import React from 'react';
import styled from 'styled-components';
import logo from 'resources/images/redbluelogo.png';
import NavItem from './nav_item';

const NavWrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100px;
  z-index: 99999;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #ccc;
`;


const NavBarWrapper = styled.nav`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100px;
  min-width: auto;
  min-height: auto;
  margin: 0 20px;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  
`;

const Divider = styled.div`
  display: block;
  height: 1px;
  width: auto;
  background: #CCC;
`;

export default () =>
  (<NavWrapper>
    <NavBarWrapper>
      <NavItem url="/" text="ABOUT" />
      <NavItem url="/" text="PROJECTS" />
      <LogoWrapper>
        <LogoImage alt="logo" src={logo} />
      </LogoWrapper>
      <NavItem url="/" text="RESUME" />
      <NavItem url="/" text="CONTACT" />
    </NavBarWrapper>
    <Divider />
  </NavWrapper>);
