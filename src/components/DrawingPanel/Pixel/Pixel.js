import React, { useState } from 'react'
import './Pixel.scss';

function Pixel({ color, clickIsHolding, bgColor }) {
    const [pixelColor, setPixelColor] = useState(bgColor);
    const [oldColor, setOldColor] = useState(pixelColor);

    const applyColor = () => {
        setPixelColor(color);
        setOldColor(color);
    }

    const changeColorOnHover = () => {
        setPixelColor(color)

        if (!clickIsHolding) {
            setOldColor(pixelColor)
        }
    }

    const resetColor = () => {
        if (!clickIsHolding) {
            setPixelColor(oldColor)
        }
    }

    const disableDragHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="pixel"
            onDragStart={disableDragHandler}
            onClick={applyColor}
            onMouseEnter={changeColorOnHover}
            onMouseLeave={resetColor}
            onMouseUp={applyColor}
            style={{ backgroundColor: pixelColor }}>
        </div>
    )
}

export default Pixel
