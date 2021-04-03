import { createSelector } from 'reselect';

// usually one layer deep for input seletor to select state
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  // 1st arg: a collection of input selector
  [selectCart],
  // 2nd, function that return the value we want out of selector
  (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
