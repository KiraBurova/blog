import React from 'react';
import { connect } from 'react-redux';
import { togglePopupWindow } from '../../redux/actions/index';
import Header from './Header';

export const HeaderContainer = () => (
  <Header />
);


const mapStateToProps = state => ({
  popupIsVisible: state.popupVisibillity.popupIsVisible,
});

const mapDispatchToProps = dispatch => ({
  togglePopupWindow: popupToggled => dispatch(togglePopupWindow(popupToggled)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
