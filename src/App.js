import { Route, Switch } from 'react-router';
import HomeLayout from './components/Layout/HomeLayout/HomeLayout';
import LoginLayout from './components/Layout/LoginLayout/LoginLayout';

function App() {
	return (
		<>
			<Switch>
				<Route path='/login' component={LoginLayout} exact />
				<Route component={(props) => <HomeLayout {...props} />} />
			</Switch>
		</>
	);
}

export default App;
