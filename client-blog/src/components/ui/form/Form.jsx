import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

const Form = ({ children, onSubmit }) => (
  <form className="blog__form container" onSubmit={onSubmit}>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
