import React from 'react';

import PropTypes from 'prop-types';

import './Textarea.scss';

const Textarea = ({ placeholder }) => {
  function handleKeyDown(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  return (
    <div className="group textarea">
      <textarea placeholder={placeholder} className="textarea__field" onKeyDown={e => handleKeyDown(e)} />
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
