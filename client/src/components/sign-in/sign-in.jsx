import React, {useState} from 'react';
import * as S from './sign-in-styles';

import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


const SignIn = ({googleSignInStart, emailSignInStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '', 
    password: ''
  });
  const {email, password} = userCredentials;

  const	handleSubmit = (event) => {
    event.preventDefault();  
    emailSignInStart(email, password);
	}


  const	handleChange = event => {
    const {value, name} = event.target;
    setUserCredentials({...userCredentials, [name]: value});
  }

  return (
    <S.SignIn>
      <S.Title>I already have an account</S.Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name='email' 
          type='email' 
          value={email} 
          handleChange={handleChange} 
          label='Email'
          required 
        />
        <FormInput 
          name='password' 
          type='password' 
          value={password} 
          handleChange={handleChange} 
          label='Password'
          required 
        />
        <S.Buttons>
          <CustomButton type='submit' onClick={handleSubmit}>
            Sign in
          </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} mod='googleSignIn'>
            Sign in with Google
          </CustomButton>
        </S.Buttons>
      </form>
    </S.SignIn>
  )
};


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);