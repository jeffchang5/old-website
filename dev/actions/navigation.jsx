import {
  UPDATE_ACTIVE_NAVIGATION,
} from 'constants/navigation';

// eslint-disable-next-line import/prefer-default-export
export const updateNavigationItem = navItem => (
  { type: UPDATE_ACTIVE_NAVIGATION, navItem });

