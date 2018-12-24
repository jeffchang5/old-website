import React from 'react';
import styled from 'styled-components';
import WideContainer from 'components/common/responsive_container';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
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
    );
  }
}

export default class ProjectsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.menuCallback = this.menuCallback.bind(this);
  }

  menuCallback(category) {
    this.setState({
      category,
    });
  }

  render() {
    return (
      <WideContainer ref={(section) => { this.section = section; }}>
        <SimpleSlider />
      </WideContainer>
    );
  }
}

