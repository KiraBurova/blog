import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

const Form = ({ children }) => (
  <form className="blog__form container">
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
