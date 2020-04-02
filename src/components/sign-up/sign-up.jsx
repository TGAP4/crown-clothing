import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase-utils';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  handleSubmit = event => {
    const {displayName, email, password, confirmPassword} = this.state;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => createUserProfileDocument(user.user, {displayName}))
    .then(() => {
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    })
    .catch(err => console.log('Error signing up:', err));
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with with email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            type='text' 
            name='displayName' 
            value={displayName} 
            handleChange={this.handleChange} 
            label='Display Name' 
            required 
          />
           <FormInput 
            type='email' 
            name='email' 
            value={email} 
            handleChange={this.handleChange} 
            label='Email' 
            required 
          />
           <FormInput 
            type='password' 
            name='password' 
            value={password} 
            handleChange={this.handleChange} 
            label='Password' 
            required 
          />
           <FormInput 
            type='password' 
            name='confirmPassword' 
            value={confirmPassword} 
            handleChange={this.handleChange} 
            label='Confirm Password' 
            required 
          />
          <CustomButton onClick={this.handleSubmit}>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;