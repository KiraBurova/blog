import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';

import styles from './Alert.module.scss';

const Alert = ({ messages }) => (
  <div className={styles.alert}>
    {messages
      && messages.errors
      && messages.errors.map(message => (
        <p className={cx(styles.alert__message, { [styles.alert__message_error]: message.status === 'error' })} key={message.message}>
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
