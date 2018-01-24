import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './../Header/Header';
import CardGrid from './../CardGrid/CardGrid';
import FilmDetails from './../FilmDetails/FilmDetails';
import './App.css';

class App extends Component {

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Route exact path="/" component={CardGrid} />
					<Route path="/details/:id" component={FilmDetails} />
				</div>
			</Router>
		);
	}
}

export default App;
