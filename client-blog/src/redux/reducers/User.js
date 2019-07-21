const initialState = {
  registerMessages: {},
  loginMessages: {},
  userRegistered: false,
  userLoggedIn: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        registerMessages: action.messages,
        userRegistered: action.userRegistered,
      };
    case 'REGISTER_USER_FAILURE':
      return {
        ...state,
        registerMessages: action.messages,
        userRegistered: action.userRegistered,
      };
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        userLoggedIn: action.userLoggedIn,
      };
    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        userLoggedIn: action.userLoggedIn,
        loginMessages: action.messages,
      };
    case 'LOGOUT_USER_SUCCESS':
      return {
        ...state,
        userLoggedIn: action.userLoggedIn,
      };
    case 'LOGOUT_USER_FAILURE':
      return {
        ...state,
        userLoggedIn: action.userLoggedIn,
      };
    default:
      return state;
  }
};

export default user;
