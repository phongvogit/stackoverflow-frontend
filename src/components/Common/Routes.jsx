import React from 'react';

import { Route, Switch } from 'react-router-dom';
import QuestionContent from '../../features/question/QuestionContent';
import TagContent from '../../features/tag/TagContent';
import UserContent from '../../features/user/UserContent';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={QuestionContent} exact />
			<Route path='/tags'>
				<TagContent />
			</Route>
			<Route path='/users'>
				<UserContent />
			</Route>
		</Switch>
	);
};

export default Routes;
