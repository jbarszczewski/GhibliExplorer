import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.PureComponent {
	render() {
		return (
			<div>
				{this.props.title} {this.props.release_date}
			</div>
		);
	}
}

Card.propTypes = {
    title: PropTypes.string,
    release_date: PropTypes.string
        }

export default Card;