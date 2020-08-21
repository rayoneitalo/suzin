const INITIAL_STATE = {
  currentUser: null,
};

export const currentUserReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
