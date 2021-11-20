import { all } from 'redux-saga/effects';
import { authSaga } from '../features/auth/authSaga';
import questionSaga from '../features/question/questionSaga';

export default function* rootSaga() {
	yield all([questionSaga(), authSaga()]);
}
