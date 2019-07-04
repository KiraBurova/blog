import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/index';
import LoginForm from './LoginForm';

export const LoginContainer = ({ history }) => {
  const [loginUserData, setValues] = useState({
    login: '',
    password: '',
  });
  const onUpdateField = e => {
    setValues({
      ...loginUserData,
      [e.target.name]: e.target.value,
    });
  };
  const onLoginUser = async (e) => {
    e.preventDefault();
    await loginUser(loginUserData);
  };
  return (
    <LoginForm
      updateField={onUpdateField}
      loginUserData={loginUserData}
      loginUser={onLoginUser}
    />
  );
};

LoginContainer.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: loginUserData => dispatch(loginUser(loginUserData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginContainer);
