import React, { Component } from 'react';
import Hero from 'containers/hero';
import About from 'containers/about';
import Projects from 'containers/projects';
import PropTypes from 'prop-types';
import GlobalStyle from '../theme/global';

class App extends Component {
  render() {
    return (
      <div>
        <Hero
          navBarItems={this.props.navBarItems}
        />
        <About />
        <Projects />
        <GlobalStyle />
      </div>);
  }
}

App.propTypes = {

};

export default App;
