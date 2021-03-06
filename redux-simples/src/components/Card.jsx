import './Card.css';
import React from 'react';

const Card = props => {
    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;