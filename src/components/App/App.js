import React, { Component } from 'react';
import Header from './../Header/Header';
import CardGrid from './../CardGrid/CardGrid';
import './App.css';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: "no"
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
      <div className="App">
        <Header/>        
				<CardGrid cards={this.state.data} />
      </div>
    );
  }
}

export default App;
