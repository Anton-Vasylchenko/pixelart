import React from 'react'
import Pixel from '../Pixel';

import './Row.scss';

function Row(props) {
    const { width, selectedColor, clickIsHolding, bgColor } = props;

    let pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel clickIsHolding={clickIsHolding} key={i} id={props.idCount + ' ' + i} bgColor={bgColor} color={selectedColor} />)
    }

    return (
        <div className="row">
            {pixels}
        </div>
    )
}

export default Row
