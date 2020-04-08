import {takeLatest, put, all, call} from 'redux-saga/effects';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase-utils';
import Types from './user-types';
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure} from './user-actions';


function* getSnapshotFromUserAuth(userAuth, ...rest) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, ...rest);
    const userSnapshot = yield call([userRef, userRef.get]);
    yield put(signInSuccess(
      {id: userSnapshot.id, ...userSnapshot.data()}
    ));
  } catch(error) {
    yield put(signInFailure(error));
  }
};


function* signInWithGoogle() {
  try {
    const {user} = yield call([auth, auth.signInWithPopup], googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch(error) {
    yield put(signInFailure(error)); 
  }
};

function* onGoogleSignInStart() {
  yield takeLatest(Types.GOOGLE_SIGN_IN_START, signInWithGoogle);
};


function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield call(
      [auth, auth.signInWithEmailAndPassword], email, password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch(error) {
    yield put(signInFailure(error)); 
  }
};

function* onEmailSignInStart() {
  yield takeLatest(Types.EMAIL_SIGN_IN_START, signInWithEmail);
};


function* signUp({payload: {email, password, displayName}}) {
  try {
    const {user} = yield call(
      [auth, auth.createUserWithEmailAndPassword], email, password
    );
    yield call(getSnapshotFromUserAuth, user, {displayName});
  } catch(error) {
    yield put(signInFailure(error))
  }
};

function* onSignUpStart() {
  yield takeLatest(Types.SIGN_UP_START, signUp);
};


function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call (getSnapshotFromUserAuth, userAuth);
  } catch(error) {
    yield put(signInFailure(error));
  }
}

function* onCheckUserSession() {
  yield takeLatest(Types.CHECK_USER_SESSION, isUserAuthenticated);
}


function* signOut() {
  try {
    yield call([auth, auth.signOut]);
    yield put(signOutSuccess());
  } catch(error) {
    yield put(signOutFailure(error))
  }
}

function* onSignOutStart() {
  yield takeLatest(Types.SIGN_OUT_START, signOut);
};


export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart)
  ]);
};