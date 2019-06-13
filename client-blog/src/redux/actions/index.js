import { TOGGLE_POPUP_WINDOW, REGISTER_USER } from './types';

const axios = require('axios');

export const togglePopupWindow = popupVisibillity => ({
  type: TOGGLE_POPUP_WINDOW,
  popupVisibillity,
});

export const registerUser = registeredUserData => async (dispatch) => {
  let messages;
  try {
    const response = await axios.post('/users/register', registeredUserData);
    messages = response.data;
  } catch (error) {
    if (error.response) {
      messages = error.response.data;
    }
  }

  dispatch({
    type: REGISTER_USER,
    messages,
  });
};
