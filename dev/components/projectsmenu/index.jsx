import React from 'react';
import styled from 'styled-components';
import ProjectMenuItem from './project_menu_item';

const projectCategories = [
  { key: 'android', name: 'Android' },
  { key: 'web_dev', name: 'Web Dev' },
  { key: 'ml', name: 'Machine Learning' },
  { key: 'data_science', name: 'Data Science' },
  { key: 'ios', name: 'iOS' },
];

const ProjectMenuWrapper = styled.div`
  display: flex;
  font-family: Helvetica,Arial,sans-serif;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 12px 0 12px 0;
  margin-bottom: 30px;

  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;


export default class ProjectMenu extends React.Component {
  render() {
    return (<ProjectMenuWrapper>
      { projectCategories.map(projectCategory =>
        (<ProjectMenuItem key={projectCategory.key} name={projectCategory.name} />))}
    </ProjectMenuWrapper>);
  }
}
