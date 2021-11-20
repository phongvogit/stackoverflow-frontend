import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { ReactComponent as Logo } from '../../../assets/images/LogoGlyphMd.svg';
import { authActions } from '../../../features/auth/authSlice';
import LinkButton from '../LinkButton/LinkButton';
import './AuthForm.css';

const AuthForm = ({ action = 'Login' }) => {
	const dispatch = useAppDispatch();

	const onSubmit = e => {
		e.preventDefault();
		console.log('Hello');
		dispatch(
			authActions.login({
				username: '',
				password: '',
			}),
		);
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
			<Logo className='auth-form__logo' />
			<div className='auth-form__login'>
				<form onSubmit={onSubmit}>
					<div className='auth-form__login__input'>
						<label>Username</label>
						<input />
					</div>
					<div className='auth-form__login__input'>
						<label>Password</label>
						<input />
					</div>
					<LinkButton
						type={'btn--primary'}
						label={action === 'Sign up' ? 'Sign up' : 'Login'}
						style={{ width: '100%', height: '100%' }}
					/>
				</form>

				<div className='auth-form__login__info'>
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
			<div className='auth-form__redirect'>
				{action === 'Sign up' ? signUpLink : logInLink}
			</div>
		</div>
	);
};

export default AuthForm;
