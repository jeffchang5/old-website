import React from 'react';
import WideContainer from 'components/common/responsive_container';
import Slider from "react-slick";

import ProjectCard from 'components/projects/projectscard'
import SectionHeader from 'components/common/section_header';
import styled from 'styled-components';

const SliderWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80vh;
`;

const Container = styled.div`
    max-width: 860px;
    margin: 0 auto;
    padding: 0 20px;
    height: 100vh;
`;

class SimpleSlider extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <SectionHeader text="Projects" />
        <SliderWrapper>
          <Slider {...settings}>
            <ProjectCard>sdaf</ProjectCard>
            <ProjectCard>sdaf</ProjectCard>
            <ProjectCard>sdaf</ProjectCard>
            <ProjectCard>sdaf</ProjectCard>
          </Slider>
        </SliderWrapper>
      </Container>
    );
  }
}

export default class ProjectsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WideContainer ref={(section) => { this.section = section; }}>
        <SimpleSlider />
      </WideContainer>
    );
  }
}

