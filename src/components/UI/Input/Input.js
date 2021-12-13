import React from 'react';
import './Input.scss';

function OptionInput({ defaultValue, onChangeHandler, type, label, className }) {

    const classNames = !className ? "input" : `input ${className}`;

    return (
        <div className="input-wrapper">
            <input
                type={type}
                className={classNames}
                defaultValue={defaultValue}
                onChange={onChangeHandler}
            />
            <div>{label}</div>
        </div>
    )
}

export default OptionInput
