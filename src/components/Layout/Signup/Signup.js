import React, { useEffect, useState } from 'react';
import AuthForm from '../../Common/AuthForm/AuthForm';
import Header from '../../Common/Header/Header';
import Caption from './components/Caption/Caption';
import authApi from '../../../api/authApi';

import './Signup.css';
import {
	authActions,
	selectFetchFailed,
	selectIsLoggedIn,
} from '../../../features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useHistory } from 'react-router';

const initialState = {
	username: '',
	password: '',
	passwordConfirmation: '',
};

const Signup = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const error = useAppSelector(selectFetchFailed);
	const isLoggedIn = useAppSelector(selectIsLoggedIn);

	const { from } = Boolean(history.location.state)
		? history.location.state
		: '/';

	useEffect(() => {
		if (isLoggedIn) {
			history.push(from);
		}
	}, [isLoggedIn]);

	const onSubmit = async formValues => {
		await dispatch(authActions.signup(formValues));
	};
	return (
		<div className='signup'>
			<div className='signup__header'>
				<Header />
			</div>
			<div className='signup__content'>
				<div className='signup__caption'>
					<Caption />
				</div>
				<p className='delete'></p>
				<div className='signup__form'>
					<AuthForm
						action='Sign up'
						initialState={initialState}
						onSubmit={onSubmit}
						error={error}
					/>
				</div>
			</div>
			<div className='signup__footer'></div>
		</div>
	);
};

export default Signup;
