import React, { useRef, useState } from 'react'
import Row from './Row';
import { exportComponentAsPNG } from "react-component-export-image"
import { CirclePicker } from 'react-color';
import html2canvas from "html2canvas";
import useHttp from '../../hooks/useHttp';
import Card from '../UI/Card';
import Loader from '../UI/Loader';
import Button from '../UI/Button';
import useCurrentDate from '../../hooks/useCurrentDate';
import circleColors from '../../config/circlePickerConfig';
import { addImage } from '../../lib/api';

import './DrawningPanel.scss';

function DrawingPanel({ width, height, bgColor }) {
    const { sendRequest, status } = useHttp(addImage);

    const [clickIsHolding, setClickIsHolding] = React.useState(false);
    const [selectedColor, setSelectedColor] = useState("#000000");
    const [prevSelectedColor, setPrevSelectedColor] = useState("#f44336");
    const [cursor, setCursor] = useState('draw');

    const date = useCurrentDate();

    const panelRef = useRef();
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

    const saveImageHandler = async () => {
        const canvas = await html2canvas(panelRef.current, {
            scale: 3,
            backgroundColor: bgColor
        });

        const image = canvas.toDataURL("image/jpg", 1.0);

        const requestData = {
            image,
            date
        }

        sendRequest(requestData);
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

            {status === 'pending' && <Loader />}
            {status === 'completed' && <p className='success'>Image was saved!</p>}

            <div className="drawning-panel">
                <div className="tools">
                    <div className="bg-circle">
                        <CirclePicker color={selectedColor}
                            onChangeComplete={changeColorHandler}
                            colors={circleColors}
                        />
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

                    <div className="actions">
                        <Button onClickHandler={saveImageHandler}>
                            Save image
                        </Button>

                        <Button onClickHandler={onExportImageHandler}>
                            export as PNG
                        </Button>
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
            </div>
        </Card >
    )
}

export default DrawingPanel
