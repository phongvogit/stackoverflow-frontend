import { call, delay, fork, put, take } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';
import authApi from '../../api/authApi';
import { isAuthenticated } from '../../utils/auth';
import { authActions } from './authSlice';

function* handleLogin(action) {
	const response = yield call(authApi.login, action.payload);
	try {
		yield delay(1000);
		localStorage.setItem('token', response.token);
		localStorage.setItem('userInfo', JSON.stringify(response.userInfo));
		localStorage.setItem('expiresAt', response.expiresAt);
		yield put(
			authActions.loginSuccess({
				username: response.userInfo.username,
				profilePhoto: response.userInfo.profilePhoto,
				created: response.userInfo.created,
			}),
		);

		// redirect to previous page
		console.log(window.location);
		// const from = Boolean(history.location.state) ? window.location.state : '/';
		// yield put(push(from));
	} catch (error) {
		yield put(authActions.loginFailed(error.message));
	}
}

function* handleLogout() {
	localStorage.removeItem('token');
	localStorage.removeItem('expiresAt');
	localStorage.removeItem('userInfo');
}

function* watchLoginFlow() {
	while (true) {
		const isLoggedIn = isAuthenticated();
		if (!isLoggedIn) {
			const action = yield take(authActions.login.type);
			yield fork(handleLogin, action.payload);
		} else {
			console.log(JSON.parse(localStorage.getItem('userInfo')), 'userInfo');
			const userInfo = JSON.parse(localStorage.getItem('userInfo'));

			yield put(
				authActions.loginSuccess({
					username: userInfo.username,
					profilePhoto: userInfo.profilePhoto,
					created: userInfo.created,
				}),
			);
		}

		yield take(authActions.logout.type);
		yield call(handleLogout);
	}
}

export function* authSaga() {
	yield fork(watchLoginFlow);
}
