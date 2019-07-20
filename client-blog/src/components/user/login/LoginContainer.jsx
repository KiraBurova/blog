import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/index';
import LoginForm from './LoginForm';

export const LoginContainer = () => (
  <LoginForm />
);

const mapDispatchToProps = (dispatch) => ({
  loginUser: loginUserData => dispatch(loginUser(loginUserData)),
});

const mapStateToProps = state => ({
  messages: state.user.loginMessages,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
