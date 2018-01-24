import {
  UPDATE_ACTIVE_NAVIGATION,
  TOGGLE_MENU,
} from 'constants/navigation';


const initialState = {
  isMenuToggled: false,
  active_navigation_item: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_NAVIGATION:
      return { ...state,
        active_navigation_item: action.navItem,
      };
    case TOGGLE_MENU:
      return { ...state,
        active_navigation_item: action.navItem,
      };
    default:
      return state;
  }
};
