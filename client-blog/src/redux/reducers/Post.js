const initialState = {
  post: {},
  messages: {},
  postsList: [],
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST_SUCCESS':
      return {
        ...state,
        post: action.post,
      };
    case 'ADD_POST_FAILURE':
      return {
        ...state,
        messages: action.messages,
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        postsList: action.postsList,
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default post;
