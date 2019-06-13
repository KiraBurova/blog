import { combineReducers } from 'redux';
import popupVisibillity from './popupVisibillity';
import user from './User';

export default combineReducers({
  popupVisibillity,
  user,
});
