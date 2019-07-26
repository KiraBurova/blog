import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Form = ({ children, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
