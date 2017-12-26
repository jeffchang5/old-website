import {
  SELECT_ACTIVE_SUBMENU_ITEM,
  SELECT_ACTIVE_MENU_ITEM,
  UPDATE_MENU_ITEMS } from 'constants/about';

export const Visibility = {
  hidden: 'hidden',
  visible: 'visible',
};

export const updateMenuItems = items => (
  { type: UPDATE_MENU_ITEMS, items });

export const selectActiveMenuItem = id => (
  { type: SELECT_ACTIVE_MENU_ITEM, id }
);

export const selectActiveSubMenuItem =
  (id, header, subheader, description, date) => (
    { type: SELECT_ACTIVE_SUBMENU_ITEM, card: { id, header, subheader, description, date } }
  );

