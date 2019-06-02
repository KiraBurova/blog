import React from 'react';

import PropTypes from 'prop-types';


import './Button.scss';

const Button = ({ type, text, className, onClick }) => (
  <button className={className} type={type} onClick={onClick}>{text}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  className: 'button',
  onClick: () => {},
};

export default Button;
