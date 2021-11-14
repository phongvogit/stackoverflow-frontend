import React from 'react';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';

import './loginlayout.css';

const LoginLayout = () => {
	return (
		<div className='login-layout'>
			<div className='login-layout__header'>
				<Header />
			</div>
			<div className='login-layout__content'>
				<AuthForm />
			</div>
			<div className='login-layout__footer'></div>
		</div>
	);
};

export default LoginLayout;
