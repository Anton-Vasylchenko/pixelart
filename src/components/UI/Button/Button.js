import React from 'react'

import './Button.scss';

function Button({ buttonText, onClickHandler }) {
    return (
        <button className="button" onClick={onClickHandler}> {buttonText} </button>
    )
}

export default Button
