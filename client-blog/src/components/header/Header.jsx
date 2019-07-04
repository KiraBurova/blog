import React from 'react';

import './Header.scss';

import StyledLink from '../ui/link/Link';

const Header = () => {
  return (
    <>
      <header className="blog__header">
        <h1 className="blog__title">
          <StyledLink to="/" text="Blog" />
        </h1>
        <div className="blog__links">
          <StyledLink to="/" text="Home" />
          <StyledLink to="/add-post" text="Add post" />
          <StyledLink to="/settings" text="Settings" />
          <StyledLink to="/login" text="Login" />
          <StyledLink to="/register" text="Register" />
        </div>
      </header>
    </>
  );
};

export default Header;
