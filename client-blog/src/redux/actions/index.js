import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from './types';

const axios = require('axios');

export const registerUser = registeredUserData => async dispatch => {
  try {
    await axios.post('/users/register', registeredUserData);
    await dispatch({
      type: REGISTER_USER_SUCCESS,
      userRegistered: true,
    });
  } catch (error) {
    if (error.response) {
      await dispatch({
        type: REGISTER_USER_FAILURE,
        messages: error.response.data,
        userRegistered: false,
      });
      throw new Error(error);
    }
  }
};

export const loginUser = loginUserData => async dispatch => {
  let userLoggedIn;
  try {
    const response = await axios.post('/users/login', loginUserData);
    userLoggedIn = true;
    await dispatch({
      type: LOGIN_USER_SUCCESS,
      userLoggedIn,
    });
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    if (error.response) {
      await dispatch({
        type: LOGIN_USER_FAILURE,
        messages: error.response.data,
      });
      throw new Error(error);
    }
  }
};

export const logoutUser = () => async dispatch => {
  try {
    await axios.get('/users/logout');
    await dispatch({
      type: LOGOUT_USER_SUCCESS,
      userLoggedIn: false,
    });
  } catch (error) {
    if (error.response) {
      await dispatch({
        type: LOGOUT_USER_FAILURE,
        userLoggedIn: true,
      });
      throw new Error(error);
    }
  }
};

export const addPost = postData => async dispatch => {
  try {
    await axios.post('/posts/add', postData);
    dispatch({
      type: ADD_POST_SUCCESS,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: ADD_POST_FAILURE,
        messages: error.response.data,
      });
    }
  }
};
