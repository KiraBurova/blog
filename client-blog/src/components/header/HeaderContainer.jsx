import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/index';

import Header from './Header';

export const HeaderContainer = () => (
  <Header />
);


const mapStateToProps = state => ({
  userLoggedIn: state.user.userLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
