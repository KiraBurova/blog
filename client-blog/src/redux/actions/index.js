import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER,
} from './types';

const axios = require('axios');

export const registerUser = registeredUserData => async dispatch => {
  try {
    await axios.post('/users/register', registeredUserData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: REGISTER_USER_FAILURE,
        messages: error.response.data,
      });
    }
  }
};

export const loginUser = loginUserData => async dispatch => {
  let messages;
  try {
    const response = await axios.post('/users/login', loginUserData);
    messages = response.data;
  } catch (error) {
    if (error.response) {
      messages = error.response.data;
    }
  }

  dispatch({
    type: LOGIN_USER,
    messages,
  });
};
