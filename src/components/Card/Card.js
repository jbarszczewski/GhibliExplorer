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

export default Card;