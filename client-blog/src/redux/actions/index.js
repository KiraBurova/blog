import { TOGGLE_POPUP_WINDOW } from './types';

export const togglePopupWindow = popupVisibillity => ({
  type: TOGGLE_POPUP_WINDOW,
  popupVisibillity,
});
