// import React, { Component } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import SectionHeader from 'components/common/section_header';
// import ResponsiveContainer from 'components/common/responsive_container';
//
// import AboutChipComponent from './aboutoptions';
// import AboutViewWrapper from './aboutviewwrapper';
//
// const AboutWrapper = styled.div`
//   display: flex;
//   position: relative;
//   flex: 1;
//   flex-wrap: wrap;
// `;
//
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-left: 15px;
//   padding-right: 15px;
//   flex: 1;
//
// `;
//
//
// const AboutSectionWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   width: 100%;
// `;
//
// const findAboutItem = (items, id) => (
//   items.filter(aboutItems =>
//     aboutItems.id === id,
//   ));
//
// class AboutComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active_option: 'experience',
//       card_item: null,
//     };
//     this.aboutOptionCallback = this.aboutOptionCallback.bind(this);
//     this.aboutCardCallback = this.aboutCardCallback.bind(this);
//   }
//   aboutOptionCallback(aboutId) {
//     this.setState({
//       active_option: aboutId,
//     });
//   }
//
//   aboutCardCallback(aboutId) {
//     this.setState({
//       active_option: aboutId,
//     });
//   }
//   render() {
//     return (
//       <ResponsiveContainer>
//         <Container>
//           <SectionHeader text="About" />
//           <AboutSectionWrapper>
//             <AboutWrapper>
//               <AboutChipComponent
//                 optionCallback={this.aboutOptionCallback}
//                 active={this.state.active_option}
//                 items={this.props.items}
//               />
//               <AboutViewWrapper
//                 cardCallback={this.aboutCardCallback}
//                 data={findAboutItem(this.props.items, this.state.active_option)[0]}
//               />
//             </AboutWrapper>
//           </AboutSectionWrapper>
//         </Container>
//       </ResponsiveContainer>);
//   }
// }
//
//
// AboutComponent.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };
//
// export default AboutComponent;
