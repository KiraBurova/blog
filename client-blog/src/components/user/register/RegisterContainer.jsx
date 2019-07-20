import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/index';
import RegisterForm from './RegisterForm';

export const RegisterContainer = () => (
  <RegisterForm />
);

const mapDispatchToProps = (dispatch) => ({
  registerUser: registeredUserData => dispatch(registerUser(registeredUserData)),
});

const mapStateToProps = state => ({
  messages: state.user.registerMessages,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
