import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  // 1st arg: a collection of input selector
  [selectUser],
  // 2nd, function that return the value we want out of selector
  (user) => user.currenUser
);
