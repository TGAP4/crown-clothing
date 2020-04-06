import React from 'react';
import * as S from './checkout-styles'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeButton from '../../components/stripe-button/stripe-buttons';

const CheckoutPage = ({cartItems, cartTotal}) => {
  return (
    <S.CheckoutPage>
      <S.CheckoutHeader>
        <S.HeaderBlock>
          <span>Product</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Description</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Quantity</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Price</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Remove</span>
        </S.HeaderBlock>
      </S.CheckoutHeader>
      {cartItems.map(cartItem => 
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )}
      <S.Total>
        <span>TOTAL: ${cartTotal}</span>
      </S.Total>
      <S.TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </S.TestWarning>
      <StripeButton price={cartTotal} />
    </S.CheckoutPage>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);