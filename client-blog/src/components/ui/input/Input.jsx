import React from 'react';

import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ type, placeholder }) => (
  <div className="group">
    <input type={type} id={placeholder} />
    <label htmlFor={placeholder}>{placeholder}</label>
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Text',
};

export default Input;
