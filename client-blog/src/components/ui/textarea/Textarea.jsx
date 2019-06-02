import React from 'react';

import PropTypes from 'prop-types';

import './Textarea.scss';

const Textarea = ({ placeholder }) => {
  function handleKeyDown(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }
  return (
    <div className="group">
      <textarea onKeyDown={e => handleKeyDown(e)} />
      {/* <label htmlFor={placeholder}>{placeholder}</label> */}
    </div>
  );
};
Textarea.propTypes = {
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: 'Text',
};

export default Textarea;
