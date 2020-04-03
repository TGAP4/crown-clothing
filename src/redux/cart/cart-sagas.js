import {all, call, takeLatest, put} from 'redux-saga/effects';
import Types from '../cart/cart-types';
import {clearCart} from './cart-actions';


function* clearCartOnSignout() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(Types.CLEAR_CART, clearCartOnSignout);
}

export default function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
};