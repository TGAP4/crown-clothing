import React from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {clearCart} from '../../redux/cart/cart-actions';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price, clearCart}) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_ZH77F2AxdYvabdnxSJaUTFHJ00cxlOYpm3';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token
      }
    })
    .then(response => {
      alert('Payment Successful!');
      clearCart();
    })
    .catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(`There was an issue with your payment.  
        Please make sure to use the credit card provided.`);
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(StripeButton);