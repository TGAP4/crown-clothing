import React from 'react';
import * as S from './cart-dropdown-styles';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {toggleCartHidden} from '../../redux/cart/cart-actions';

import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';


const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <S.CartDropdown>
      <S.CartItems>
        {cartItems.length ?
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />
          )
          : <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        }
      </S.CartItems>
      <S.Button
        as={CustomButton}
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </S.Button>
    </S.CartDropdown>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));