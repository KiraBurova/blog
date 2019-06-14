import React from 'react';

import PropTypes from 'prop-types';

import './Alert.scss';

const Alert = ({ messages }) => (
  <div className="alert">
    {messages &&
      messages.errors &&
      messages.errors.map(message => (
        <p className="alert__message" key={message.message}>
          {message.message}
        </p>
      ))}
  </div>
);

Alert.propTypes = {
  messages: PropTypes.shape({ message: PropTypes.string }),
};

Alert.defaultProps = {
  messages: {},
};

export default Alert;
