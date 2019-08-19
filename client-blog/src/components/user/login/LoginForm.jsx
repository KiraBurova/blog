import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../../ui/form/Form';
import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';
import Alert from '../../ui/alert/Alert';

const LoginForm = ({ messages, loginUser, history }) => {
  const [loginUserData, setValues] = useState({
    email: '',
    password: '',
  });
  const onUpdateField = e => {
    setValues({
      ...loginUserData,
      [e.target.name]: e.target.value,
    });
  };
  const onLoginUser = (e) => {
    e.preventDefault();
    loginUser(loginUserData)
      .then(() => history.push('/'))
      .catch(() => history.push('/login'));
  };
  return (
    <Form onSubmit={onLoginUser}>
      <Input
        placeholder="Email"
        name="email"
        id="email"
        onChange={onUpdateField}
        value={loginUserData.email}
        required
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        id="password"
        onChange={onUpdateField}
        value={loginUserData.password}
        required
      />
      <Button text="Login" type="submit" />
      <Alert messages={messages} />
    </Form>
  );
};

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  messages: PropTypes.shape({ message: PropTypes.string }),
  history: PropTypes.shape({}).isRequired,
};

LoginForm.defaultProps = {
  messages: {},
};

export default LoginForm;
