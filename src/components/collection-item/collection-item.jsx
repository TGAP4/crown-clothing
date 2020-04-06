import React from 'react';
import * as S from './collection-item-styles';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';

import CustomButton from '../custom-button/custom-button';

const CollectionItem = (({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <S.CollectionItem>
      <S.Image imageUrl={imageUrl} />
      <S.CollectionFooter>
        <S.Name>{name}</S.Name>
        <S.Price>{price}</S.Price>
      </S.CollectionFooter>
      <CustomButton mod='inverted' onClick={() => addItem(item)}>
          Add to cart
      </CustomButton>
    </S.CollectionItem>
  );
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);