import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';

import StyledLink from '../ui/link/Link';
import Button from '../ui/button/Button';

const Header = ({ logoutUser, userLoggedIn, history }) => {
  const [token, setToken] = useState('');

  const loadToken = () => {
    const userToken = localStorage.getItem('token');
    setToken(userToken);
  };

  const logOut = () => {
    logoutUser()
      .then(() => {
        history.push('/login');
      })
      .catch(() => { });
  };

  useEffect(() => {
    loadToken();
  }, []);

  const loggedIn = token || userLoggedIn;

  return (
    <header className={styles.blog__header}>
      <h1 className={styles.blog__title}>
        <StyledLink to="/" text="Blog" />
      </h1>
      <div className={styles.blog__links}>
        <StyledLink to="/" text="Home" />
        {loggedIn && <StyledLink to="/add-post" text="Add post" />}
        {!loggedIn
          && <>
            <StyledLink to="/login" text="Login" />
            <StyledLink to="/register" text="Register" />
          </>
        }
        {loggedIn && <Button onClick={logOut} text="Logout" />}
      </div>
    </header>
  );
};

export default Header;
