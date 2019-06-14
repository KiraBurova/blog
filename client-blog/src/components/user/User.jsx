import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../ui/button/Button';
import Form from '../ui/form/Form';
import Input from '../ui/input/Input';
import Popup from '../ui/popup/Popup';
import Alert from '../ui/alert/Alert';

const User = ({
  stage,
  changeStage,
  togglePopupWindow,
  setStage,
  registerUser,
  messages,
}) => {
  const [registeredUserData, setValues] = useState({
    login: '',
    email: '',
    password: '',
  });

  const updateField = (e) => {
    setValues({
      ...registeredUserData,
      [e.target.name]: e.target.value,
    });
  };
  function onRegisterUser(e) {
    e.preventDefault();
    registerUser(registeredUserData);
  }
  return (
    <Popup togglePopupWindow={togglePopupWindow} setStage={setStage}>
      <Form onSubmit={onRegisterUser}>
        {stage === 'register' && (
          <>
            <h2>Register</h2>
            <Input
              name="login"
              type="text"
              placeholder="Login"
              onChange={updateField}
              value={registeredUserData.login}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={updateField}
              value={registeredUserData.email}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={updateField}
              value={registeredUserData.password}
              required
            />
            <Button text="Register" type="submit" />
            <Alert messages={messages} />
            <p>
              <span>Already registered?</span>
              <Button
                className="button popup__login"
                text="Login"
                onClick={() => changeStage('login')}
              />
            </p>
          </>
        )}
        {stage === 'login' && (
          <>
            <h2>Login</h2>
            <Input type="text" placeholder="Login" required />
            <Input type="password" placeholder="Password" required />
            <Button text="Login" />
          </>
        )}
      </Form>
    </Popup>
  );
};

User.propTypes = {
  stage: PropTypes.string.isRequired,
  changeStage: PropTypes.func.isRequired,
  togglePopupWindow: PropTypes.func.isRequired,
  setStage: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  messages: PropTypes.shape({ message: PropTypes.string }),
};

User.defaultProps = {
  messages: {},
};

export default User;
