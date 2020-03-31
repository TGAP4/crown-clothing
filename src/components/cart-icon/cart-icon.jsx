import React from 'react';
import './cart-icon.scss';
import {ReactComponent as CartSymbol} from '../../assets/cart.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import {selectCartItemCount} from '../../redux/cart/cart-selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return(
    <div className='cart-icon' onClick={toggleCartHidden}>
      <CartSymbol className='cart-symbol'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);