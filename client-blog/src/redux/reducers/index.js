import { combineReducers } from 'redux';
import user from './User';
import post from './Post';

export default combineReducers({
  user,
  post,
});
