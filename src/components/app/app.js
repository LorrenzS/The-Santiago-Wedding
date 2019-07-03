import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import Header from '../header/header';
import Wedding from '../wedding/wedding';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/wedding" component={Wedding} />
				</Switch>
			</Router>
		);
	}
}

export default App;
