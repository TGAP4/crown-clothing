import React from 'react';
import './sign-in.scss';

import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}


	handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    const {emailSignInStart} = this.props;
    emailSignInStart(email, password);
	}


	handleChange = event => {
		const {value, name} = event.target;
		this.setState({[name]: value});
	}


	render() {
		const {googleSignInStart} = this.props;
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name='email' 
						type='email' 
						value={this.state.email} 
						handleChange={this.handleChange} 
						label='Email'
						required 
					/>
					<FormInput 
						name='password' 
						type='password' 
						value={this.state.password} 
						handleChange={this.handleChange} 
						label='Password'
						required 
					/>
					<div className='buttons'>
						<CustomButton type='submit' onClick={this.handleSubmit}>
							Sign in
						</CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} mod='googleSignIn'>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);