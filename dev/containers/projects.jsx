import React from 'react';
import WideContainer from 'components/common/responsive_container';
import Slider from "react-slick";

import ProjectCard from 'components/projects/projectscard'
import SectionHeader from 'components/common/section_header';

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
      <div>
        <SectionHeader text="Projects" />
        <Slider {...settings}>
          <ProjectCard>sdaf</ProjectCard>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
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

