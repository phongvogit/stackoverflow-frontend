import { Route, Switch } from 'react-router';
import HomeLayout from './components/Layout/HomeLayout/HomeLayout';
import Login from './features/login/Login';

function App() {
	return (
		<>
			<Switch>
				<Route path='/login' component={Login} exact />
				<Route component={(props) => <HomeLayout {...props} />} />
			</Switch>
		</>
	);
}

export default App;
