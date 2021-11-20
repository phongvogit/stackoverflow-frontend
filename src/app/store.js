import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import questionReducer from '../features/question/questionSlice';
import { history } from '../utils/history';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
	router: connectRouter(history),
	question: questionReducer,
	auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);
