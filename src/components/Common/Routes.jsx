import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddQuestion from '../../features/question/pages/add-question/AddQuestion';
import DetailQuestion from '../../features/question/pages/detail-question/DetailQuestion';
import Question from '../../features/question';
import Tag from '../../features/tag';
import userDetail from '../../features/user/pages/userDetail';
import User from '../../features/user';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={Question} exact />
			<Route path='/tags' component={Tag} exact />
			<Route path='/users' component={User} exact />
			<Route path='/users/:user' component={userDetail} exact />
			<Route path='/addQuestion' component={AddQuestion} exact />
			<Route path='/questions/:question' component={DetailQuestion} exact />
			<Route path='/questions/tags/:tag' component={Question} exact />
		</Switch>
	);
};

export default Routes;
