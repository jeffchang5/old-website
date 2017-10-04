import React from 'react';
import styled from 'styled-components';
import logo from 'resources/images/redbluelogo.png';
import NavItem from './nav_item';

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Title = styled.div`
//   font-family: 'Amatic SC', cursive;
//   font-size: 25pt;
// `;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
 
`;
const LogoImage = styled.img`
  width: 100px;
  margin: 20px 0 0 0;
  height: auto;
`;

export default () =>
  (<NavWrapper>
    <NavItem url="/" text="About" />
    <NavItem url="/" text="Project" />
    <LogoWrapper>
      <LogoImage alt="logo" src={logo} />
    </LogoWrapper>
    <NavItem url="/" text="Resume" />
    <NavItem url="/" text="Contact" />
  </NavWrapper>);
