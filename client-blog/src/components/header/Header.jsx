import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';

import StyledLink from '../ui/link/Link';
import Button from '../ui/button/Button';

const Header = ({ logoutUser, userLoggedIn }) => {
  const [token, setToken] = useState('');

  const loadToken = () => {
    const userToken = localStorage.getItem('token');
    setToken(userToken);
  };

  const logOut = () => {
    logoutUser()
      .then(() => localStorage.removeItem('token'))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <>
      <header className={styles.blog__header}>
        <h1 className={styles.blog__title}>
          <StyledLink to="/" text="Blog" />
        </h1>
        <div className={styles.blog__links}>
          <StyledLink to="/" text="Home" />
          <StyledLink to="/add-post" text="Add post" />
          {!token && !userLoggedIn
            && <>
              <StyledLink to="/login" text="Login" />
              <StyledLink to="/register" text="Register" />
            </>
          }
          {(token || userLoggedIn) && <Button onClick={logOut} text="Logout" />}
        </div>
      </header>
    </>
  );
};

export default Header;
