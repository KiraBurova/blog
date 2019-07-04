import React from 'react';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../redux/actions/index';
import Header from './Header';

export const HeaderContainer = () => (
  <Header />
);


const mapStateToProps = state => ({
  popupIsVisible: state.popupVisibillity.popupIsVisible,
  messages: state.user.messages,
});

const mapDispatchToProps = dispatch => ({
  registerUser: registeredUserData => dispatch(registerUser(registeredUserData)),
  loginUser: loginUserData => dispatch(loginUser(loginUserData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
