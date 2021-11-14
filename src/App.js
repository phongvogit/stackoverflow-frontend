import { Route, Switch } from 'react-router';
import HomeLayout from './components/Layout/HomeLayout/HomeLayout';
import LoginLayout from './components/Layout/LoginLayout/LoginLayout';
import SignupLayout from './components/Layout/SignupLayout/SignupLayout';

function App() {
	return (
		<>
			<Switch>
				<Route path='/login' component={LoginLayout} exact />
				<Route path='/signup' component={SignupLayout} exact />
				<Route component={(props) => <HomeLayout {...props} />} />
			</Switch>
		</>
	);
}

export default App;
