import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const MenuWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-top: 1px solid #ccc;
  width: 100%;
`;

const MenuItemWrapper = styled.div`;
  display: flex;
  margin: 0 auto;
  padding: 15px;
  background: white;
  font-family: ${props => props.theme.font.sanserif};
  border-bottom: 1px solid #ccc;
`;
const MenuItemTextWrapper = styled.div`;
  display: flex;
  margin: 0 auto;
  background: white;
  font-family: ${props => props.theme.font.sanserif};
`;

const MenuItem = ({ text }) => (
  <MenuItemWrapper>
    <MenuItemTextWrapper>{ text }</MenuItemTextWrapper>
  </MenuItemWrapper>);

MenuItem.propTypes = {
  text: propTypes.string.isRequired,
};

export default () => (
  <MenuWrapper>
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
  </MenuWrapper>);
