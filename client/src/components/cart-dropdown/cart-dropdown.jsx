import React from 'react';
import * as S from './cart-dropdown-styles';
import {withRouter, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {toggleCartHidden} from '../../redux/cart/cart-actions';

import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';


const CartDropdown = ({windowPosition, cartItems, toggleCartHidden}) => {
  return (
    <S.CartDropdown windowPosition={windowPosition}>
      <S.XButton onClick={toggleCartHidden}>x</S.XButton>
      <S.CartItems>
        {cartItems.length ?
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />
          )
          : <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        }
      </S.CartItems>
      <Link to={'/checkout'}>
        <S.Button as={CustomButton} onClick={toggleCartHidden}>
            GO TO CHECKOUT
        </S.Button>
      </Link>
    </S.CartDropdown>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));