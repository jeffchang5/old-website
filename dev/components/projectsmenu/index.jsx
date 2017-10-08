import React from 'react';
import styled from 'styled-components';
import ProjectMenuItem from './project_menu_item';

const projectCategories = [
  { key: 'web_dev', name: 'Web Dev' },
  { key: 'ml', name: 'Machine Learning' },
  { key: 'ios', name: 'iOS' },
];

const ProjectMenuWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;


export default class ProjectMenu extends React.Component {
  render() {
    return (<ProjectMenuWrapper>
      { projectCategories.map(projectCategory =>
        (<ProjectMenuItem key={projectCategory.key} name={projectCategory.name} />))}
    </ProjectMenuWrapper>);
  }
}
