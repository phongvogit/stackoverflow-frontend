import { call, fork, take, put, delay } from '@redux-saga/core/effects';
import authApi from '../../api/authApi';
import { authActions } from './authSlice';

function* handleLogin(action) {
	const response = yield call(authApi.login, action.payload);
	console.log(response, 'response');
	try {
		yield delay(1000);
		localStorage.setItem('access_token', response.token);
		yield put(
			authActions.loginSuccess({
				username: response.userInfo.username,
				profilePhoto: response.userInfo.profilePhoto,
				created: response.userInfo.created,
			}),
		);

		// redirect to admin page
		// yield put(push('/admin/dashboard'));
	} catch (error) {
		yield put(authActions.loginFailed(error.message));
	}
	// redirect to admin page
}

function* handleLogout() {
	console.log('Handle logout');
	localStorage.removeItem('access_token');
	// redirect to login page
	// yield put(push('/login'));
}

function* watchLoginFlow() {
	while (true) {
		const isLoggedIn = Boolean(localStorage.getItem('access_token'));
		if (!isLoggedIn) {
			const action = yield take(authActions.login.type);
			yield fork(handleLogin, action.payload);
		}

		yield take(authActions.logout.type);
		yield call(handleLogout);
	}
}

export function* authSaga() {
	yield fork(watchLoginFlow);
}
