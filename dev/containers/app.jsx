import React, { Component } from 'react';
import Hero from 'containers/hero';
import About from 'containers/about';
import Projects from 'containers/projects';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refs: [],
    };
  }
  render() {
    return (
      <div>
        <Hero
          ref={section => this.props.setRefs(section)}
          navBarItems={this.props.navBarItems}
        />
        <About ref={section => this.props.setRefs(section)} />
        <Projects ref={section => this.props.setRefs(section)} />
      </div>);
  }
}

App.propTypes = {
  setRefs: PropTypes.func.isRequired,
  navBarItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    scroll: PropTypes.shape({
      top: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
};

export default App;
