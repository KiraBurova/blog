import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

import Button from '../ui/button/Button';
import StyledLink from '../ui/link/Link';
import Form from '../ui/form/Form';
import Input from '../ui/input/Input';
import Popup from '../ui/popup/Popup';

const Header = ({ togglePopupWindow, popupIsVisible }) => {
  const [stage, setStage] = useState('register');

  function changeStage(stageVal) {
    setStage(stageVal);
  }

  return (
    <>
      {popupIsVisible && (
        <Popup togglePopupWindow={togglePopupWindow} setStage={setStage}>
          <Form>
            {stage === 'register' && (
              <>
                <h2>Register</h2>
                <Input type="text" placeholder="Login" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button text="Register" />
                <p>
                  <span>Already registered?</span>
                  <Button
                    className="popup__login"
                    text="Login"
                    onClick={() => changeStage('login')}
                  />
                </p>
              </>
            )}
            {stage === 'login' && (
              <>
                <h2>Login</h2>
                <Input type="text" placeholder="Login" />
                <Input type="password" placeholder="Password" />
                <Button text="Register" />
              </>
            )}
          </Form>
        </Popup>
      )}
      <header className="blog__header">
        <h1 className="blog__title">
          <StyledLink to="/" text="Blog" />
        </h1>
        <div className="blog__links">
          <StyledLink to="/" text="Home" />
          <StyledLink to="/add-post" text="Add post" />
          <StyledLink to="/settings" text="Settings" />
          <Button
            className="blog__login"
            text="Login or Register"
            onClick={() => togglePopupWindow()}
          />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  togglePopupWindow: PropTypes.func.isRequired,
  popupIsVisible: PropTypes.bool.isRequired,
};

export default Header;
