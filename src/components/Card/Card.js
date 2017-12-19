import PropTypes from 'prop-types';
import React from 'react';

import './Card.css';

class Card extends React.PureComponent {
    render() {
        return (
            <div className="Card">
                <p className="Title">
                    {this.props.title}
                </p>
                <p className="Year">
                    {this.props.release_date}
                </p>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    release_date: PropTypes.string
}

export default Card;