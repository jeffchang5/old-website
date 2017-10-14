import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCategories from 'config/project_categories';
import ProjectSectionHeader from './projectsectionheader';
import ProjectMenuItem from './project_menu_item';


const ProjectMenuWrapper = styled.div`
  display: flex;
  font-family: 'Lora',Arial,sans-serif;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 12px 0 12px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;


export default class ProjectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <div>
        <ProjectSectionHeader />
        <ProjectMenuWrapper>
          { Object.keys(ProjectCategories).map(key => (
            <ProjectMenuItem
              key={key}
              id={key}
              name={ProjectCategories[key].name}
              decorationColor={ProjectCategories[key].accentColor}
              onClick={this.props.callback}
            />
          )) }
        </ProjectMenuWrapper>
      </div>);
  }
}

ProjectMenu.propTypes = {
  callback: PropTypes.func.isRequired,
};
