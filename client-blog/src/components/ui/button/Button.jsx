import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  type,
  text,
  onClick,
}) => (
  <button
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => { },
};

export default Button;
