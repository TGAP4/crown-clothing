import Types from './cart-types';
import {addItemsToCart, removeItemFromCart} from './cart-utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.TOGGLE_CART_HIDDEN: 
      return {
        ...state,
        hidden: !state.hidden
      };
    case Types.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      };
    case Types.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case Types.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case Types.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case Types.ADD_PREVIOUS_USER_CART:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, ...action.payload)
      };
    default:
      return state
  }
}

export default cartReducer;