import React from 'react'
import './Card.scss';

function Card({ children, className }) {

    const classNames = !className ? "card" : `card ${className}`;

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default Card
