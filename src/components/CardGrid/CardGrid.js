import PropTypes from 'prop-types';
import React from 'react';

import Card from './../Card/Card';

class CardGrid extends React.PureComponent {
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
        return <div>{this.state.data.map((card, i) => <Card key={i} {...card} />)}</div>;
    }
}

export default CardGrid
