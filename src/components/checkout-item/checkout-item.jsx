import React from 'react';
import * as S from './checkout-item-styles';

import {connect} from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart-actions';

const CheckoutItem = ({cartItem, addItem, removeItem, clearItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <S.CheckoutItem>
      <S.ImageContainer>
        <S.Img src={imageUrl} alt='item' />
      </S.ImageContainer>
      <S.Detail>{name}</S.Detail>
      <S.Quantity>
        <S.Arrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </S.Arrow>
        <S.QuantityValue>{quantity}</S.QuantityValue>
        <S.Arrow onClick={() => addItem(cartItem)}>
          &#10095;
        </S.Arrow>
      </S.Quantity>
      <S.Detail>{price}</S.Detail>
      <S.RemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </S.RemoveButton>
    </S.CheckoutItem>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);