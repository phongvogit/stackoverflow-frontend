import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
	authActions,
	selectFetchFailed,
	selectIsLoggedIn,
} from '../../../features/auth/authSlice';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';

import './Login.css';

const initialState = {
	username: '',
	password: '',
};

const Login = () => {
	const history = useHistory();
	const isLoggedIn = useAppSelector(selectIsLoggedIn);
	const error = useAppSelector(selectFetchFailed);

	const { from } = Boolean(history.location.state)
		? history.location.state
		: '/';

	useEffect(() => {
		if (isLoggedIn) {
			history.push(from);
		}
	}, [isLoggedIn]);

	return (
		<div className='login'>
			<div className='login__header'>
				<Header />
			</div>
			<div className='login__content'>
				<AuthForm initialState={initialState} error={error} />
			</div>
			<div className='login__footer'></div>
		</div>
	);
};

export default Login;
