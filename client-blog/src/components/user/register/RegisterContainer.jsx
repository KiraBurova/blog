import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/index';
import RegisterForm from './RegisterForm';

export const RegisterContainer = ({ history }) => {
  const [registeredUserData, setValues] = useState({
    email: '',
    login: '',
    password: '',
  });
  const onUpdateField = e => {
    setValues({
      ...registeredUserData,
      [e.target.name]: e.target.value,
    });
  };
  const onRegisterUser = async (e) => {
    e.preventDefault();
    await registerUser(registeredUserData);
    // history.push('/login');
  };
  return (
    <RegisterForm
      updateField={onUpdateField}
      registeredUserData={registeredUserData}
      registerUser={onRegisterUser}
    />
  );
};

RegisterContainer.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: registeredUserData => dispatch(registerUser(registeredUserData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(RegisterContainer);
