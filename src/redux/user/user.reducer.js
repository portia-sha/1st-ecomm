// state is something that Redux store will pass to this reducer whenever the action is fired

import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  cuurentUser: null,
};

// Set Default parameter value: state = INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        // curentState, currentUser
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}; // => {currentUser :{...}}

export default userReducer;
