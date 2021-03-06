import React from 'react';

export default ChildComponent => (class ScrollComponent extends React.Component {
  constructor(props) {
    super(props);
    this.references = [];
    this.lastScrollPosition = 0;
    this.state = { navBarItems: [], isFirstChildScrolled: false, isDownScroll: false };
    this.onScroll = this.onScroll.bind(this);
    this.setRefs = this.setRefs.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
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
    const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const firstElementHeight = this.state.navBarItems[0].scroll.height;
    if (bodyScrollTop >= firstElementHeight) {
      if (bodyScrollTop >= (this.lastScrollPosition)) {
        this.setState({ ...this.state, isFirstChildScrolled: true, isDownScroll: true });
      } else {
        this.setState({ ...this.state, isFirstChildScrolled: true, isDownScroll: false });
      }
    } else {
      this.setState({ ...this.state, isFirstChildScrolled: false, isDownScroll: true });
    }
    this.lastScrollPosition = bodyScrollTop;
  }

  setRefs(ref) {
    this.references.push(ref);
  }
  render() {
    return (<ChildComponent
      isDownScroll={this.state.isDownScroll}
      isFirstChildScrolled={this.state.isFirstChildScrolled}
      navBarItems={this.state.navBarItems}
      setRefs={this.setRefs}
      {...this.props}
    />);
  }
});
