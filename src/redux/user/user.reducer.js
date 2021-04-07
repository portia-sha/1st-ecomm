// state is something that Redux store will pass to this reducer whenever the action is fired

import UserActionTypes from './user.types';

const INITIAL_STATE = {
  cuurentUser: null,
  error: null,
};

// Set Default parameter value: state = INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // return {
    //   ...state,
    //   currentUser: action.payload,
    //   error: null,
    // };

    // case UserActionTypes.SIGN_UP_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
}; // => {currentUser :{...}}

export default userReducer;
