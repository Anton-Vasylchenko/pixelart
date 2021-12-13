import React, { useRef, useState } from 'react'
import Row from './Row';
import { exportComponentAsPNG } from "react-component-export-image"
import { CirclePicker } from 'react-color';
import Card from '../UI/Card';
import Button from '../UI/Button';

import './DrawningPanel.scss';

function DrawingPanel({ width, height, bgColor }) {
    const [clickIsHolding, setClickIsHolding] = React.useState(false);
    const [selectedColor, setSelectedColor] = useState("#f44336");
    const [prevSelectedColor, setPrevSelectedColor] = useState("#f44336");
    const [cursor, setCursor] = useState('draw');
    const panelRef = useRef();

    let rows = [];

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} bgColor={bgColor} clickIsHolding={clickIsHolding} />)
    }

    const onMouseDownHandler = () => {
        setClickIsHolding(true);
    }

    const onMouseUpHandler = () => {
        setClickIsHolding(false);
    }

    const changeColorHandler = (color) => {
        setSelectedColor(color.hex);
        setCursor('draw');
    }

    const onExportImageHandler = () => {
        exportComponentAsPNG(panelRef, { fileName: 'pixelart' })
    }

    const changeTool = (e) => {
        const toolName = e.target.id;

        setCursor(toolName);

        if (toolName === 'eraser') {
            setPrevSelectedColor(selectedColor);
            setSelectedColor(bgColor);
            return;
        }

        setSelectedColor(prevSelectedColor);
    }

    return (
        <Card className="drawning-panel">
            <div className="bg-circle">
                <CirclePicker color={selectedColor} onChangeComplete={changeColorHandler} />
            </div>

            <div className="toolbar">
                <div id="draw" className={cursor === 'draw' ? 'toolbar__item draw-button tool-active' : 'toolbar__item draw-button'} onClick={changeTool}>
                </div>
                <div id="eraser" className={cursor === 'eraser' ? 'toolbar__item eraser-button tool-active' : 'toolbar__item eraser-button'} onClick={changeTool}>
                </div>
            </div>

            <div ref={panelRef}
                className={`pixels ${cursor}-cursor`}
                onMouseLeave={onMouseUpHandler}
                onMouseDown={onMouseDownHandler}
                onMouseUp={onMouseUpHandler}>
                {rows}
            </div>

            <Button
                onClickHandler={onExportImageHandler}
                buttonText={"export as PNG"}
            />
        </Card >
    )
}

export default DrawingPanel
