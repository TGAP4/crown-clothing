import React, {useState} from 'react';
import './sign-in.scss';

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
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
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
        <div className='buttons'>
          <CustomButton type='submit' onClick={handleSubmit}>
            Sign in
          </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} mod='googleSignIn'>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
};


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);