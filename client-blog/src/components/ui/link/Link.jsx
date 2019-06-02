import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './Link.scss';

const StyledLink = ({ to, text }) => (
  <Link to={to}>{text}</Link>
);

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default StyledLink;
