import React from 'react';

import PropTypes from 'prop-types';

import './Popup.scss';

const Popup = ({ children, togglePopupWindow, setStage }) => {
  return (
    <>
      <div className="popup">{children}</div>
      <div
        role="presentation"
        className="overlay"
        onClick={() => {
          togglePopupWindow();
          setStage('register');
        }}
      />
    </>
  );
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  togglePopupWindow: PropTypes.func.isRequired,
  setStage: PropTypes.func.isRequired,
};

export default Popup;
