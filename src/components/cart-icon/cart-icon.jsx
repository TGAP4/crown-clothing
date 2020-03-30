import React from 'react';
import './cart-icon.scss';
import {ReactComponent as CartSymbol} from '../../assets/cart.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions';

const CartIcon = ({toggleCartHidden}) => {
  return(
    <div className='cart-icon' onClick={toggleCartHidden}>
      <CartSymbol className='cart-symbol'/>
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default connect(null, mapDispatchToProps)(CartIcon);