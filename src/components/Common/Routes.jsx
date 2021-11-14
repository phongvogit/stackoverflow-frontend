import React from 'react';

import { Route, Switch } from 'react-router-dom';
import AddQuestion from '../../features/question/pages/add-question/AddQuestion';
import QuestionContent from '../../features/question/QuestionContent';
import TagContent from '../../features/tag/TagContent';
import UserContent from '../../features/user/UserContent';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={QuestionContent} exact />
			<Route path='/tags' component={TagContent} />
			<Route path='/users' component={UserContent} />
			<Route path='/addQuestion' component={AddQuestion} />
		</Switch>
	);
};

export default Routes;
