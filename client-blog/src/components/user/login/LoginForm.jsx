import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../ui/form/Form';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';

const LoginForm = ({ updateField, loginUserData, loginUser }) => (
  <Form onSubmit={loginUser}>
    <Input
      placeholder="Login"
      name="login"
      id="login"
      onChange={updateField}
      value={loginUserData.login}
      required
    />
    <Input
      placeholder="Password"
      type="password"
      name="password"
      id="password"
      onChange={updateField}
      value={loginUserData.password}
      required
    />
    <Button text="Login" type="submit" />
  </Form>
);

LoginForm.propTypes = {
  updateField: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  loginUserData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default LoginForm;
