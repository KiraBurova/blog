import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Form from '../../ui/form/Form';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import Alert from '../../ui/alert/Alert';

const RegisterForm = ({ registerUser, messages, history }) => {
  const [registeredUserData, setValues] = useState({
    email: '',
    login: '',
    password: '',
  });
  const onUpdateField = e => {
    setValues({
      ...registeredUserData,
      [e.target.name]: e.target.value,
    });
  };
  const onRegisterUser = (e) => {
    e.preventDefault();
    registerUser(registeredUserData)
      .then(() => history.push('/login'))
      .catch(() => history.push('/register'));
  };
  return (
    <Form onSubmit={onRegisterUser}>
      <Input
        placeholder="Email"
        type="email"
        name="email"
        id="email"
        onChange={onUpdateField}
        value={registeredUserData.email}
        required
      />
      <Input
        placeholder="Login"
        name="login"
        id="login"
        onChange={onUpdateField}
        value={registeredUserData.login}
        required
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        id="password"
        onChange={onUpdateField}
        value={registeredUserData.password}
        required
      />
      <Button text="Register" type="submit" />
      <Alert messages={messages} />
    </Form>
  );
};

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  messages: PropTypes.shape({ message: PropTypes.string }),
  history: PropTypes.shape({}).isRequired,
};

RegisterForm.defaultProps = {
  messages: {},
};

export default RegisterForm;
