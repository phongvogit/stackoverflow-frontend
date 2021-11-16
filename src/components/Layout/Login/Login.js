import React from 'react';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';

import './Login.css';

const Login = () => {
	return (
		<div className='login'>
			<div className='login__header'>
				<Header />
			</div>
			<div className='login__content'>
				<AuthForm />
			</div>
			<div className='login__footer'></div>
		</div>
	);
};

export default Login;
