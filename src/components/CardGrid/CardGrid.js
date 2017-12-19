import React from 'react';
import Card from './../Card/Card';

class CardGrid extends React.PureComponent {
	render() {
        return <div>{this.props.cards.map(card => <Card {...card} />)}</div>;
    }
};

export default CardGrid
