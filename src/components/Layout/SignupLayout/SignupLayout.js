import React from 'react';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';
import Caption from './components/Caption/Caption/Caption';

import './signupLayout.css';

const SignupLayout = () => {
	return (
		<div className='signup-layout'>
			<div className='signup-layout__header'>
				<Header />
			</div>
			<div className='signup-layout__content'>
				<div className='signup-layout__content-caption'>
					<Caption />
				</div>
				<div className='signup-layout__content-form'>
					<AuthForm action='Sign up' />
				</div>
			</div>
			<div className='signup-layout__footer'></div>
		</div>
	);
};

export default SignupLayout;
