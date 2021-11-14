import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/LogoGlyphMd.svg';
import LinkButton from '../LinkButton/LinkButton';
import './authForm.css';

const AuthForm = ({ action = 'Login' }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Hello');
	};

	const signUpLink = (
		<>
			Already have an account?{' '}
			<Link to='/login' name='login' className='link ml-1'>
				Log in
			</Link>
		</>
	);

	const logInLink = (
		<>
			Don't have an account?{' '}
			<Link to='/signup' name='register' className='link ml-1'>
				Sign up
			</Link>
		</>
	);

	return (
		<div className='auth-form'>
			<Logo className='logo' />
			<div className='form-container'>
				<form className='login-form' onSubmit={onSubmit}>
					<div className='form-input'>
						<label>Username</label>
						<input />
					</div>
					<div className='form-input'>
						<label>Password</label>
						<input />
					</div>
					<LinkButton
						type={'s-btn__primary'}
						label={action === 'Sign up' ? 'Sign up' : 'Login'}
						style={{ width: '100%', height: '100%' }}
					/>
				</form>

				<div className='caption'>
					By clicking “{action}”, you agree to our{' '}
					<a
						href='https://stackoverflow.com/legal/terms-of-service/public'
						className='link'>
						terms of service
					</a>
					,{' '}
					<a
						href='https://stackoverflow.com/legal/privacy-policy'
						name='privacy'
						className='link'>
						privacy policy
					</a>{' '}
					and{' '}
					<a
						href='https://stackoverflow.com/legal/cookie-policy'
						className='link'>
						cookie policy
					</a>
				</div>
			</div>
			<div className='redirect caption'>
				{action === 'Sign up' ? signUpLink : logInLink}
			</div>
		</div>
	);
};

export default AuthForm;
