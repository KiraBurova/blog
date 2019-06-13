import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

import Button from '../ui/button/Button';
import StyledLink from '../ui/link/Link';

import User from '../user/User';

const Header = ({
  togglePopupWindow,
  popupIsVisible,
  registerUser,
  messages,
}) => {
  const [stage, setStage] = useState('register');

  function changeStage(stageVal) {
    setStage(stageVal);
  }

  return (
    <>
      {popupIsVisible && (
        <User
          changeStage={changeStage}
          stage={stage}
          togglePopupWindow={togglePopupWindow}
          setStage={setStage}
          registerUser={registerUser}
          messages={messages}
        />
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
