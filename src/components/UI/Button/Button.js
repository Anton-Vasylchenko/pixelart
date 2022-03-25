import React from 'react'

import classes from './Button.module.scss';

function Button({ children, onClickHandler, className }) {

    const classNames = className ? `${classes.button} ${className}` : `${classes.button}`;

    return (
        <button className={classNames} onClick={onClickHandler}> {children} </button>
    )
}

export default React.memo(Button)
