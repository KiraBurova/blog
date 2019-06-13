import React from 'react';

import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  type,
  placeholder,
  name,
  onChange,
  required,
}) => (
  <div className="group">
    <input name={name} type={type} id={placeholder} onChange={onChange} required={required} />
    <label htmlFor={placeholder}>{placeholder}</label>
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: 'Text',
  name: '',
  onChange: () => {},
  required: false,
};

export default Input;
