import React, { Component } from 'react';
import Hero from 'containers/hero';
import About from 'containers/about';
import Projects from 'containers/projects';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <Hero
          isDownScroll={this.props.isDownScroll}
          isFirstChildScrolled={this.props.isFirstChildScrolled}
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
  isFirstChildScrolled: PropTypes.bool,
  isDownScroll: PropTypes.bool,
  navBarItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    scroll: PropTypes.shape({
      top: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
};

export default App;
