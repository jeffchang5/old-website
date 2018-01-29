import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from 'components/common/section_header';
import ResponsiveContainer from 'components/common/responsive_container';

import { selectActiveMenuItem, selectActiveSubMenuItem, updateMenuItems } from 'actions/about';
import AboutOptionComponent from 'components/about/aboutoptions';
import AboutViewWrapper from 'components/about/aboutviewwrapper';
import AboutCard from 'components/about/aboutcard';
import AboutItems from 'config/about_items';

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;

`;

const AboutSectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const findAboutItem = (items, id) => (
  items.filter(aboutItems =>
    aboutItems.id === id,
  )[0]);


const mapStateToProps = state =>
  ({
    activeId: state.about.active_menuitem,
    items: state.about.menuitems,
    card_details: state.about.card_details,
  });

const mapDispatchToProps = dispatch =>
  ({
    updateMenuItems: items => dispatch(updateMenuItems(items)),
    onMenuItemClicked: id => dispatch(selectActiveMenuItem(id)),
    onSubMenuSelected: (id, name, position, description, date) =>
      dispatch(selectActiveSubMenuItem(
        id, name, position, description, date)),
  });

const AboutMetaOptionComponent = (props) => {
  if (props.card != null) {
    return (<AboutCard
      date={props.card.date}
      description={props.card.description}
      header={props.card.header}
      subheader={props.card.subheader}
    />);
  }
  return (
    <AboutOptionComponent
      active={props.option.activeId}
      onMenuItemClicked={props.option.onMenuItemClicked}
      items={props.option.items}
    />
  );
};

AboutMetaOptionComponent.propTypes = ({
  option:
    PropTypes.shape({
      activeId: PropTypes.string.isRequired,
      onMenuItemClicked: PropTypes.func.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ),
    }),
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
});

class About extends Component {
  componentDidMount() {
    this.props.updateMenuItems(AboutItems);
  }
  render() {
    return (<ResponsiveContainer innerRef={(section) => { this.section = section; }}>
      <Container>
        <SectionHeader text="About" />
        <AboutSectionWrapper>
          <AboutWrapper>
            <AboutMetaOptionComponent
              option={{
                activeId: this.props.activeId,
                onMenuItemClicked: this.props.onMenuItemClicked,
                items: this.props.items,
              }}
              card={this.props.card_details}
            />
            <AboutViewWrapper
              onSubMenuSelected={this.props.onSubMenuSelected}
              item={findAboutItem(this.props.items, this.props.activeId)}
            />
          </AboutWrapper>
        </AboutSectionWrapper>
      </Container>
    </ResponsiveContainer>);
  }
}

const AboutComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
  null, { withRef: true },
)(About);

About.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  onMenuItemClicked: PropTypes.func.isRequired,
  onSubMenuSelected: PropTypes.func.isRequired,
  updateMenuItems: PropTypes.func.isRequired,
  card_details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default AboutComponent;
