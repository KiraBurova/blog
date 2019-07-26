import React from 'react';

import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({
  type,
  placeholder,
  name,
  onChange,
  required,
}) => (

  <div className={styles.input}>
    <input
      className={styles.input__field}
      name={name}
      type={type}
      id={placeholder}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'Text',
  name: '',
  onChange: () => { },
  required: false,
};

export default Input;
