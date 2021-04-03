// state is something that Redux store will pass to this reducer whenever the action is fired

import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  cuurentUser: null,
};

// Set Default parameter value: state = INITIAL_STATE
// Means that if the state ever undefined/not set, then it will go back to check above obejct and assign INITIAL_STATE to state.

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
