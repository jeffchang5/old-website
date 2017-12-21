import React, { Component } from 'react';
import Timeline from 'components/common/timeline';
import ExperienceConfig from 'config/experience_items';

export default class ExperienceComponent extends Component {
  constructor(props) {
    super(props);
    this.experienceCallback = this.experienceCallback.bind(this);
  }
  experienceCallback(aboutId) {
    this.setState({
      active_item: aboutId,
    });
  }
  render() {
    return (<Timeline
      callback={this.experienceCallback}
      items={ExperienceConfig.map(item =>
        ({
          id: item.id,
          header: item.name,
          subheader: item.position,
        }),
      )}
    />);
  }
}
