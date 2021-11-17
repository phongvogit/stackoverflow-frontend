import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddQuestion from '../../features/question/pages/add-question/AddQuestion';
import DetailQuestion from '../../features/question/pages/detail-question/DetailQuestion';
import Question from '../../features/question/Question';
import Tag from '../../features/tag/Tag';
import userDetail from '../../features/user/pages/userDetail';
import User from '../../features/user/User';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={Question} exact />
			<Route path='/tags' component={Tag} />
			<Route path='/users' component={User} exact />
			<Route path='/users/:user' component={userDetail} />
			<Route path='/addQuestion' component={AddQuestion} />
			<Route path='/questions/:question' component={DetailQuestion} />
		</Switch>
	);
};

export default Routes;
