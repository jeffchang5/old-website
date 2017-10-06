import React from 'react';
import NavBar from 'components/navbar';
import About from 'containers/about';
import Projects from 'containers/projects';
import styled from 'styled-components';

const AppWrapper = styled.div``;

export default () =>
  (<AppWrapper>
    <NavBar />
    <About />
    <Projects />
  </AppWrapper>);
