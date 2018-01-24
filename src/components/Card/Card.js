import PropTypes from 'prop-types';
import React from 'react';

import './Card.css';
import { Link } from 'react-router-dom';

class Card extends React.PureComponent {
    render() {
        return (
            <Link to={`/details/${this.props.id}`}>
                <div className="Card">
                    <p className="Title">
                        {this.props.title}
                    </p>
                    <p className="Year">
                        {this.props.release_date}
                    </p>
                </div>
            </Link>
        );
    }
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string
}

export default Card;