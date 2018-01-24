import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './../Header/Header';
import CardGrid from './../CardGrid/CardGrid';
import FilmDetails from './../FilmDetails/FilmDetails';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: ""
		};
	}

	componentWillMount() {
		fetch("https://ghibliapi.herokuapp.com/films")
			.then(response => response.json())
			.then(json => {
				this.setState({
					data: json,
					error: ""
				});
			})
			.catch(ex => {
				this.setState({
					error: ex
				});
			});
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Route exact path="/" render={() => <CardGrid cards={this.state.data} />} />
					<Route path="/details/:id" component={FilmDetails} />
				</div>
			</Router>
		);
	}
}

export default App;
