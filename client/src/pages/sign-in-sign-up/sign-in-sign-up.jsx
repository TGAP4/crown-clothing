import React from 'react';
import * as S from './sign-in-sign-up-styles';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInSignUp = () => {
    return (
        <S.SignInSignUp>
            <SignIn />
            <SignUp />
        </S.SignInSignUp>
    )
};

export default SignInSignUp;