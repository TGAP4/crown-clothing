import {all, call, takeLatest, put} from 'redux-saga/effects';
import Types from '../user/user-types';
import {clearCart} from './cart-actions';


function* clearCartOnSignout() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(Types.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export default function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
};