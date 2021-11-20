import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
	authActions,
	selectIsLoggedIn,
} from '../../../features/auth/authSlice';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';

import './Login.css';

const Login = () => {
	const history = useHistory();
	const isLoggedIn = useAppSelector(selectIsLoggedIn);
	const dispatch = useAppDispatch();
	const { from } = Boolean(history.location.state)
		? history.location.state
		: '/';

	useEffect(() => {
		if (isLoggedIn) {
			history.push(from);
		}
	}, [isLoggedIn]);

	const onSubmit = async e => {
		e.preventDefault();
		await dispatch(
			authActions.login({
				username: '',
				password: '',
			}),
		);
	};

	return (
		<div className='login'>
			<div className='login__header'>
				<Header />
			</div>
			<div className='login__content'>
				<AuthForm onSubmit={onSubmit} />
			</div>
			<div className='login__footer'></div>
		</div>
	);
};

export default Login;
