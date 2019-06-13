const initialState = {
  messages: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default user;
