import React from 'react';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';
import Caption from './components/Caption/Caption';

import './Signup.css';

const Signup = () => {
	return (
		<div className='signup'>
			<div className='signup__header'>
				<Header />
			</div>
			<div className='signup__content'>
				<div className='signup__caption'>
					<Caption />
				</div>
				<div className='signup__form'>
					<AuthForm action='Sign up' />
				</div>
			</div>
			<div className='signup__footer'></div>
		</div>
	);
};

export default Signup;
