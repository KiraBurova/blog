const initialState = {
  popupIsVisible: false,
};

const popupVisibillity = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_POPUP_WINDOW':
      return {
        ...state,
        popupIsVisible: !state.popupIsVisible,
      };
    default:
      return state;
  }
};

export default popupVisibillity;
