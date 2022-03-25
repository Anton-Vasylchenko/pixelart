import React, { useCallback, useRef, useState } from 'react'
import Row from './Row';
import { SwatchesPicker as ColorPicker } from 'react-color';
import Card from '../UI/Card';

import './DrawningPanel.scss';

function DrawingPanel({ width, height, bgColor, panelRef }) {
    const [clickIsHolding, setClickIsHolding] = React.useState(false);
    const [selectedColor, setSelectedColor] = useState("#000000");
    const [prevSelectedColor, setPrevSelectedColor] = useState("#f44336");
    const [cursor, setCursor] = useState('draw');

    const rowsRef = useRef();

    let rows = [];

    for (let i = 0; i < height; i++) {
        rows.push(
            <Row
                key={i}
                idCount={i}
                width={width}
                selectedColor={selectedColor}
                bgColor={bgColor}
                clickIsHolding={clickIsHolding}
            />
        )
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

    const touchMove = (event) => {
        const x = event.touches[0].clientX;
        const y = event.touches[0].clientY;
        const elemTouch = document.elementFromPoint(x, y);

        if (!elemTouch.classList.contains('pixel')) return;

        elemTouch.style.backgroundColor = selectedColor;
    }

    return (
        <Card>
            <div className="drawning-panel">
                <div className="tools">
                    <div className="bg-circle">
                        <ColorPicker color={selectedColor}
                            onChangeComplete={changeColorHandler} />
                    </div>

                    <div className="toolbar">
                        <div id="draw"
                            className={cursor === 'draw' ?
                                'toolbar__item draw-button tool-active' :
                                'toolbar__item draw-button'}
                            onClick={changeTool}>
                        </div>
                        <div id="eraser"
                            className={cursor === 'eraser' ?
                                'toolbar__item eraser-button tool-active' :
                                'toolbar__item eraser-button'}
                            onClick={changeTool}>
                        </div>
                    </div>
                </div>

                <div ref={panelRef}
                    className={`pixels ${cursor}-cursor`}
                    onMouseLeave={onMouseUpHandler}
                    onTouchMove={touchMove}
                    onPointerDown={onMouseDownHandler}
                    onPointerUp={onMouseUpHandler}>

                    <div className="rowsDiv" ref={rowsRef}>
                        {rows}
                    </div>
                </div>

                {/* <div className="actions">
                    <Button onClickHandler={saveImageHandler}>
                        Save image
                    </Button>

                    <Button onClickHandler={onExportImageHandler}>
                        export as PNG
                    </Button>
                </div> */}
            </div>
        </Card >
    )
}

export default DrawingPanel
