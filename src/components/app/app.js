import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import Navigation from '../navigation/navigation';
import Wedding from '../wedding/wedding';
import PageNotFound from '../page-not-found/page-not-found';
import Gallery from '../gallery/gallery';
import Rsvp from '../rsvp/rsvp';
import Registry from '../registry/registry';

class App extends Component {
	render() {
		return (
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/wedding" component={Wedding} />
					<Route exact path="/gallery" component={Gallery} />
					<Route exact path="/Rsvp" component={Rsvp} />
					<Route exact path="/Registry" component={Registry} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
