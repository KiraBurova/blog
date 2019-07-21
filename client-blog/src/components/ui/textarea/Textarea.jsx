import React from 'react';

import PropTypes from 'prop-types';

import './Textarea.scss';

const Textarea = ({ placeholder, name, onChange }) => {
  function handleKeyDown(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  return (
    <div className="group textarea">
      <textarea placeholder={placeholder} name={name} className="textarea__field" onChange={onChange} onKeyDown={e => handleKeyDown(e)} />
    </div>
  );
};
Textarea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  placeholder: 'Text',
  name: '',
  onChange: () => {},
};

export default Textarea;
