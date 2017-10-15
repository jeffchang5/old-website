import React from 'react';
import NavBar from 'components/navbar';
import Hero from 'containers/hero';
import Projects from 'containers/projects';
import styled from 'styled-components';

const AppWrapper = styled.div``;

export default () =>
  (<AppWrapper>
    <NavBar />
    <Hero />
    <Projects />
  </AppWrapper>);
