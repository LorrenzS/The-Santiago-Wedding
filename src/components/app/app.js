import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home/home';
import Header from '../header/header';
import AboutUs from '../about-us/about-us';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/aboutus" component={AboutUs} />
				</Switch>
			</Router>
		);
	}
}

export default App;
