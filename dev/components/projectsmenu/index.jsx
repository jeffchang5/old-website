import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCategories from 'config/project_categories';
import ProjectMenuItem from './project_menu_item';


const ProjectMenuWrapper = styled.div`
  display: flex;
  font-family: 'Lora',Arial,sans-serif;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 12px 0 12px 0;
  margin-bottom: 30px;

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
      <ProjectMenuWrapper>
        { Object.keys(ProjectCategories).map((key) => {
          const category = ProjectCategories[key];
          return (
            <ProjectMenuItem
              key={key}
              id={key}
              name={category.name}
              onClick={this.props.callback}
            />);
        })
        }
      </ProjectMenuWrapper>);
  }
}

ProjectMenu.propTypes = {
  callback: PropTypes.func.isRequired,
};
