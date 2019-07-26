import React from 'react';

import PropTypes from 'prop-types';

import styles from './Alert.module.scss';

const Alert = ({ messages }) => (
  <div className="alert">
    {messages
      && messages.errors
      && messages.errors.map(message => (
        <p className={styles[`alert__message ${message.status === 'error' ? 'alert__message_error' : 'alert__message_ok'}`]} key={message.message}>
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
