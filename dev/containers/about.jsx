import React from 'react';
import styled from 'styled-components';
import sample from 'resources/images/sample.jpg';

const NavBarBufferWrapper = styled.div`
  padding-top: 15vh`;

const AboutBanner = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 88vh;
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
`;

// const AboutDescription = styled.div`
//   position: absolute;
//   display: inline;
//   width: 30%;
//   height: 30%;
//   right: 0;
//   top: 60%;
//     box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
//
//   background-color: lightblue;
// `;

export default () => (
  <NavBarBufferWrapper>
    <AboutBanner>
      <AboutImage src={sample} />
    </AboutBanner>
  </NavBarBufferWrapper>);
