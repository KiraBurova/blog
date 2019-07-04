import { TOGGLE_POPUP_WINDOW, REGISTER_USER, LOGIN_USER } from './types';

const axios = require('axios');

export const togglePopupWindow = popupVisibillity => ({
  type: TOGGLE_POPUP_WINDOW,
  popupVisibillity,
});

export const registerUser = registeredUserData => async (dispatch) => {
  let messages;
  let userRegistered;
  try {
    const response = await axios.post('/users/register', registeredUserData);
    messages = response.data;
    userRegistered = true;
  } catch (error) {
    if (error.response) {
      messages = error.response.data;
      userRegistered = false;
    }
  }

  dispatch({
    type: REGISTER_USER,
    messages,
    userRegistered,
  });
};

export const loginUser = loginUserData => async (dispatch) => {
  let userLoggedIn;
  try {
    await axios.post('/users/login', loginUserData);
    userLoggedIn = true;
  } catch (error) {
    if (error.response) {
      userLoggedIn = false;
    }
  }

  dispatch({
    type: LOGIN_USER,
    userLoggedIn
  });
};
