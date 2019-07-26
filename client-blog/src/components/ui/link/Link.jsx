import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './Link.module.scss';

const StyledLink = ({ to, text }) => (
  <Link to={to} className={styles.link}>{text}</Link>
);

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default StyledLink;
