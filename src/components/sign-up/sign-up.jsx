import React, {useState} from 'react';
import * as S from './sign-up-styles';

import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user-actions';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


const SignUp = ({signUpStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '', 
    password: '', 
    confirmPassword: '', 
    displayName: ''
  });
  const {displayName, email, password, confirmPassword} = userCredentials;
  

  const handleSubmit = event => {
    event.preventDefault();  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signUpStart(email, password, displayName);
  }


  const handleChange = event => {
    const {name, value} = event.target;
    setUserCredentials({...userCredentials, [name]: value});
  }


  return (
    <S.SignUp>
      <S.Title>I do not have an account</S.Title>
      <span>Sign up with with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type='text' 
          name='displayName' 
          value={displayName} 
          handleChange={handleChange} 
          label='Display Name' 
          required 
        />
          <FormInput 
          type='email' 
          name='email' 
          value={email} 
          handleChange={handleChange} 
          label='Email' 
          required 
        />
          <FormInput 
          type='password' 
          name='password' 
          value={password} 
          handleChange={handleChange} 
          label='Password' 
          required 
        />
          <FormInput 
          type='password' 
          name='confirmPassword' 
          value={confirmPassword} 
          handleChange={handleChange} 
          label='Confirm Password' 
          required 
        />
        <CustomButton type='submit' onClick={handleSubmit}>SIGN UP</CustomButton>
      </form>
    </S.SignUp>
  );
};


const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => 
    dispatch(signUpStart({email, password, displayName}))
});

export default connect(null, mapDispatchToProps)(SignUp);