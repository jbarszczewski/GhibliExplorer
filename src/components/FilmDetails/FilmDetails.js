import PropTypes from 'prop-types';
import React from 'react';

import './FilmDetails.css';

class FilmDetails extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: ""
		};
    }
    
    componentWillMount() {
		fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
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
            <div className="FilmDetails">
                <p className="Title">
                    { this.state.data.title }
                </p>
                <p className="ReleaseDate">
                    { this.state.data.release_date }
                </p>
                <p className="Director">
                    { this.state.data.director }
                </p>
                <p className="Description">
                    { this.state.data.description }
                </p>
            </div>
        );
    }
}

FilmDetails.propTypes = {
    match: PropTypes.object
}


export default FilmDetails;