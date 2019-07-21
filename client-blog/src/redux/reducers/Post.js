const initialState = {
  post: {},
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
};

export default post;
