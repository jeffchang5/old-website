import React from 'react';
import PropTypes from 'prop-types';
import Timeline from 'components/common/timeline';
import ExperienceConfig from 'config/experience_items';

const ExperienceComponent = props => (
  (<Timeline
    onSubMenuSelected={props.onSubMenuSelected}
    items={ExperienceConfig.map(item =>
      ({
        id: item.id,
        header: item.name,
        subheader: item.position,
        description: item.description,
        date: item.date,
      }),
    )}
  />));

ExperienceComponent.propTypes = {
  onSubMenuSelected: PropTypes.func,
};
export default ExperienceComponent;
