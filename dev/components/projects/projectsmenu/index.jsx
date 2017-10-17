import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCategories from 'config/project_categories';
import ProjectSectionHeader from './projectsectionheader';
import ProjectMenuItem from './project_menu_item';


const ProjectMenuWrapper = styled.div`
  display: flex;
  font-family: 'Fira Sans', serif;
  font-weight: 300;
  font-size: 15pt;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 12px 0 12px 0;
  margin: 0 0 24px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;


export default class ProjectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.clearActiveStateCallback = this.clearActiveStateCallback.bind(this);
    this.setActiveState = this.setActiveState.bind(this);
    this.state = {
      clearActive: 'hidden',
    };
  }
  setActiveState(id) {
    this.setState({
      clearActive: 'visible',
    });
    this.props.callback(id);
  }
  clearActiveStateCallback() {
    this.setState({
      clearActive: 'hidden',
    });
    this.props.callback('default');
  }
  render() {
    return (
      <div>
        <ProjectSectionHeader
          clearActive={this.state.clearActive}
          callback={this.clearActiveStateCallback}
        />
        <ProjectMenuWrapper>
          { Object.keys(ProjectCategories).map(key => (
            <ProjectMenuItem
              key={key}
              id={key}
              name={ProjectCategories[key].name}
              decorationColor={ProjectCategories[key].accentColor}
              onClick={this.setActiveState}
            />
          )) }
        </ProjectMenuWrapper>
      </div>);
  }
}

ProjectMenu.propTypes = {
  callback: PropTypes.func.isRequired,
};
