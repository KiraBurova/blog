const initialState = {
  messages: {},
  userLoggedIn: false,
  userRegistered: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        messages: action.messages,
        userRegistered: action.userRegistered
      };
      case 'LOGIN_USER':
        return {
          ...state,
          userLoggedIn: action.userLoggedIn
        }
    default:
      return state;
  }
};

export default user;
