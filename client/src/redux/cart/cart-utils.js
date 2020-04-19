export const addItemsToCart = (cartItems, ...itemsToAdd) => {
  const newCartItems = [...cartItems];
  for (const item of itemsToAdd) {
    const existingCartItem = newCartItems.findIndex(
      cartItem => cartItem.id === item.id
    );

    if (existingCartItem > -1) {
      newCartItems[existingCartItem] = {
        ...newCartItems[existingCartItem], 
        quantity: newCartItems[existingCartItem].quantity + (item.quantity || 1)
      };
    } else {
      newCartItems.push({...item, quantity: (item.quantity || 1)});
    }
  }
  return newCartItems;
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  );
};