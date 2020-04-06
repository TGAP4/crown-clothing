import React from 'react';
import * as S from './cart-item-styles';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <S.CartItem>
      <S.Img src={imageUrl} alt='Item' />
      <S.ItemDetails>
        <S.Name>{name}</S.Name>
        <span>{quantity} x ${price}</span>
      </S.ItemDetails>
    </S.CartItem>
  )
}

export default CartItem;