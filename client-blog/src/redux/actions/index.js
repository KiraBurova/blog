import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,

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
    localStorage.removeItem('token');
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
    await axios.post('/posts/addPost', postData);
    await dispatch({
      type: ADD_POST_SUCCESS,
      post: postData,
    });
  } catch (error) {
    if (error.response) {
      await dispatch({
        type: ADD_POST_FAILURE,
        messages: error.response.data,
      });
      throw new Error(error);
    }
  }
};

export const fetchPosts = () => async dispatch => {
  try {
    const response = await axios.get('/posts/getPosts');
    await dispatch({
      type: FETCH_POSTS_SUCCESS,
      postsList: response.data,
    });
  } catch (error) {
    if (error.response) {
      await dispatch({
        type: FETCH_POSTS_FAILURE,
        messages: error.response.data,
      });
      throw new Error(error);
    }
  }
};

export const deletePost = (id) => async dispatch => {
  try {
    await axios.post(`posts/deletePost/${id}`, id);
    await dispatch({
      type: DELETE_POST_SUCCESS,
      id,
    });
  } catch (error) {
    if (error.response) {
      await dispatch({
        type: DELETE_POST_FAILURE,
        messages: error.response.data,
      });
      throw new Error(error);
    }
  }
};
