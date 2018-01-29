/* eslint-disable react/no-did-mount-set-state */
import React from 'react';

export default ChildComponent => (class ScrollComponent extends React.Component {
  constructor(props) {
    super(props);
    this.references = [];
    this.state = { navBarItems: [] };
    this.onScroll = this.onScroll.bind(this);
    this.setRefs = this.setRefs.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const heights = this.references.map((ref) => {
      if (ref.wrappedInstance !== undefined) {
        const wrappedRef = ref.wrappedInstance.section;
        return {
          top: wrappedRef.offsetTop,
          height: wrappedRef.offsetHeight,
        };
      } return {
        top: ref.section.offsetTop,
        height: ref.section.offsetHeight,
      };
    });
    this.setState({
      navBarItems: [
        { title: 'Hero', scroll: heights[0] },
        { title: 'About', scroll: heights[1] },
        { title: 'Projects', scroll: heights[2] },
      ],
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  onScroll() {
    console.log('hello');
  }

  setRefs(ref) {
    this.references.push(ref);
  }
  render() {
    return (<ChildComponent
      navBarItems={this.state.navBarItems}
      setRefs={this.setRefs}
      {...this.props}
    />);
  }
});
