import { Route, Switch } from 'react-router';
import Home from './components/Layout/Home/Home';
import Login from './components/Layout/Login/Login';
import Signup from './components/Layout/Signup/Signup';

function App() {
	return (
		<>
			<Switch>
				<Route path='/login' component={Login} exact />
				<Route path='/signup' component={Signup} exact />
				<Route component={(props) => <Home {...props} />} />
			</Switch>
		</>
	);
}

export default App;
