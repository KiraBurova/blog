import React from 'react';
import { connect } from 'react-redux';
import { togglePopupWindow, registerUser } from '../../redux/actions/index';
import Header from './Header';

export const HeaderContainer = () => (
  <Header />
);


const mapStateToProps = state => ({
  popupIsVisible: state.popupVisibillity.popupIsVisible,
  messages: state.user.messages,
});

const mapDispatchToProps = dispatch => ({
  togglePopupWindow: popupToggled => dispatch(togglePopupWindow(popupToggled)),
  registerUser: registeredUserData => dispatch(registerUser(registeredUserData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
