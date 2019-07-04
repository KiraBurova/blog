import React from 'react';

import PropTypes from 'prop-types';

import Form from '../../ui/form/Form';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';

const RegisterForm = ({ updateField, registeredUserData, registerUser }) => (
  <Form onSubmit={registerUser}>
    <Input
      placeholder="Email"
      type="email"
      name="email"
      id="email"
      onChange={updateField}
      value={registeredUserData.email}
      required
    />
    <Input
      placeholder="Login"
      name="login"
      id="login"
      onChange={updateField}
      value={registeredUserData.login}
      required
    />
    <Input
      placeholder="Password"
      type="password"
      name="password"
      id="password"
      onChange={updateField}
      value={registeredUserData.password}
      required
    />
    <Button text="Register" type="submit" />
  </Form>
);

RegisterForm.propTypes = {
  updateField: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  registeredUserData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default RegisterForm;
