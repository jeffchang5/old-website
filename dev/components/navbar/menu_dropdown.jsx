import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuWrapper = styled.div`
  position: absolute;
  border-top: 1px solid #ccc;
  width: 100%;
  top: 95px;
  display:  ${props => (props.isVisible ? 'block' : 'none')};
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
  text: PropTypes.string.isRequired,
};

const MenuDropDown = ({ isVisible }) => (
  <MenuWrapper isVisible={isVisible}>
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
    <MenuItem text="Hello World" />
  </MenuWrapper>);

MenuDropDown.propTypes = {
  isVisible: PropTypes.bool,
  navBarItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    scroll: PropTypes.shape({
      top: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
};

export default MenuDropDown;

