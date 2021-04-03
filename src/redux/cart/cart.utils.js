// Utility function allow us to keep our files clean and organize functions that we may need in multiple files in one location, may this function related with Redux state?

// find function, return the first element that match the callback function in array

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // map return an new array that witch each element that match
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// quantity property will get attached to each cartitem when nre item add in first time, then it can be referencing by item and its subset
