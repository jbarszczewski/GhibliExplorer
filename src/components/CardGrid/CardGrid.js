import PropTypes from 'prop-types';
import React from 'react';

import Card from './../Card/Card';

class CardGrid extends React.PureComponent {
	render() {
        return <div>{this.props.cards.map((card, i) => <Card key={i} {...card} />)}</div>;
    }
}

CardGrid.propTypes = {
    cards: PropTypes.array
}

export default CardGrid
