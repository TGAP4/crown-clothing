import Types from './user-types';

export const googleSignInStart = () => ({
    type: Types.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
    type: Types.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = (user) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: Types.SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
  type: Types.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: Types.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: Types.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
  type: Types.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: Types.SIGN_UP_START,
  payload: userCredentials
});