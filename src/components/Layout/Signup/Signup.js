import React from 'react';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';
import Caption from './components/Caption/Caption/Caption';

import './Signup.css';

const Signup = () => {
	return (
		<div className='signup'>
			<div className='signup__header'>
				<Header />
			</div>
			<div className='signup__content'>
				<Caption />
				<AuthForm action='Sign up' />
			</div>
			<div className='signup__footer'></div>
		</div>
	);
};

export default Signup;
