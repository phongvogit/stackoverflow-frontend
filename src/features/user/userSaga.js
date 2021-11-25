import {
	call,
	debounce,
	put,
	takeLatest,
	delay,
} from '@redux-saga/core/effects';
import userApi from '../../api/userApi';
import { userActions } from './userSlice';

function* fetchUserList(action) {
	try {
		yield delay(1000);
		const response = yield call(userApi.getAll, action.payload);
		yield put(userActions.fetchUserListSuccess(response));
	} catch (error) {
		console.log('Failed to fetch user list', error);
		yield put(userActions.fetchUserListFailed());
	}
}

function* handleSearchDebounce(action) {
	try {
		yield delay(500);
		const response = yield call(userApi.getUserByName, action.payload);
		yield put(userActions.fetchUserListSuccess(response));
	} catch (error) {
		console.log('Failed to fetch user list', error);
		yield put(userActions.fetchUserListFailed());
	}
}

export default function* userSaga() {
	yield takeLatest(userActions.fetchUserList.type, fetchUserList);
	yield debounce(
		500,
		userActions.setFilterWithDebounce.type,
		handleSearchDebounce,
	);
}
