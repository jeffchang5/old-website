import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const NavItem = styled.a`
  &:hover {
    color:salmon;
  }
    
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18pt;
  margin: 30px 30px 0 30px;
`;

// NavItem.addEventListener('mouseover', (event) => {
//   console.log(event);e
// });


const NavComponent = (props) => {
  const createHoverBar = (element) => {
    element.preventDefault();
    console.log('Hello');
    // this.element.bind(element);
    // element.visibility = 'invisible';
  };

  return <NavItem href={props.url} onmouseover={createHoverBar}>{props.text}</NavItem>;
};

NavComponent.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

NavComponent.defaultProps = {
  url: 'http://www.google.com/',
  text: 'Google',
};

export default NavComponent;
