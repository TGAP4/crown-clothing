import React from 'react';
import * as S from './cart-icon-styles';
import {ReactComponent as Logo} from '../../assets/cart.svg';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import {selectCartItemCount} from '../../redux/cart/cart-selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return(
    <S.CartIcon onClick={toggleCartHidden}>
      <S.CartSymbol as={Logo} />
      <S.ItemCount>{itemCount}</S.ItemCount>
    </S.CartIcon>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);