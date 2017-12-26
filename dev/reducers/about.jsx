import {
  SELECT_ACTIVE_MENU_ITEM,
  SELECT_ACTIVE_SUBMENU_ITEM,
  UPDATE_MENU_ITEMS,
} from 'constants/about';


const initialState = {
  menuitems: [],
  active_menuitem: 'general',
  card_details: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_MENU_ITEM:
      return { ...state,
        active_menuitem: action.id,
      };
    case SELECT_ACTIVE_SUBMENU_ITEM:
      return { ...state,
        card_details: action.card,
      };
    case UPDATE_MENU_ITEMS:
      return {
        ...state,
        menuitems: [
          ...action.items,
        ],
      };
    default:
      return state;
  }
};
