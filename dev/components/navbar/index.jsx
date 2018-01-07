import React from 'react';
import styled from 'styled-components';
import logo from 'resources/images/redbluelogo.png';
import NavItem from './nav_item';

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 99999;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #ccc;
`;


const NavBarWrapper = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 50%;
  min-width: 50px;
  height: auto;
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
  </NavWrapper>);
