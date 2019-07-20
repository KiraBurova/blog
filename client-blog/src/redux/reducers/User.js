const initialState = {
  registerMessages: {},
  loginMessages: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        registerMessages: action.messages,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        loginMessages: action.messages,
      };
    default:
      return state;
  }
};

export default user;
