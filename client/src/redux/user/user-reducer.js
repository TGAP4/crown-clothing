import Types from './user-types';

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case Types.SIGN_IN_FAILURE:
    case Types.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case Types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    default:
      return state;
  }
}

export default userReducer;