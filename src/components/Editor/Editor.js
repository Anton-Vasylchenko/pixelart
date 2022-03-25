import React, { useState, useRef } from 'react';
import DrawingPanel from '../DrawingPanel';
import { GithubPicker } from 'react-color';
import circleColors from '../../config/circlePickerConfig';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Loader from '../UI/Loader';
import html2canvas from "html2canvas";
import Input from '../UI/Input';
import useComponentVisible from '../../hooks/useComponentVisible';
// import useIsMobile from '../../hooks/useIsMobile';
import useWindowDimensions from '../../hooks/useIsMobile';
import { exportComponentAsPNG } from "react-component-export-image";
import useCurrentDate from '../../hooks/useCurrentDate';
import useHttp from '../../hooks/useHttp';
import { addImage } from '../../lib/api';

import classes from './Editor.module.scss';
import Alert from '../UI/Alert';

function Editor() {
    const [panelWidth, setPanelWidth] = useState(16)
    const [panelHeight, setPanelHeight] = useState(16)
    const [hideOptions, setHideOptions] = useState(false)
    const [buttonText, setButtonText] = useState("GO!")
    const [background, setBackground] = useState("#ffffff")
    const [error, setError] = useState(false)
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const { sendRequest, status } = useHttp(addImage);

    const date = useCurrentDate();

    const panelRef = useRef();

    const isMobile = useWindowDimensions();

    const initialDrawingPanel = () => {
        const maxSize = isMobile.width < 800 ? 20 : 35;

        if (panelWidth > maxSize) {
            setError(`Max width is ${maxSize}`);
            return;
        }
        if (panelWidth < 2) {
            setError('Minimum width is 2')
            return;
        }
        if (panelHeight > maxSize) {
            setError(`Max height is ${maxSize}`);
            return;
        }
        if (panelHeight < 2) {
            setError('Minimum height is 2')
            return;
        }

        if (error) {
            return;
        }
        setHideOptions(prevState => !prevState);
        !hideOptions ? setButtonText("reset options") : setButtonText("start");
    }

    const onChangeHeightInput = (e) => {
        setError(false)
        setPanelHeight(e.target.value)
    }

    const onChangeWidthInput = (e) => {
        setError(false)
        setPanelWidth(e.target.value)
    }

    const changeBackgroundHandler = (color) => {
        setBackground(color.hex)
        showBackgroundModal();
    }

    const showBackgroundModal = () => {
        setIsComponentVisible(prevState => !prevState)
    }

    const saveImageHandler = async () => {
        const canvas = await html2canvas(panelRef.current, {
            scale: 3,
            backgroundColor: background
        });

        const image = canvas.toDataURL("image/jpg", 1.0);

        const requestData = {
            image,
            date
        }
        sendRequest(requestData);
    }

    const onExportImageHandler = () => {
        exportComponentAsPNG(panelRef, { fileName: 'pixelart' })
    }

    return (
        <>
            {error && <Alert text={error}></Alert>}

            {status === 'pending' && <Loader />}
            {status === 'completed' && <Alert type={'success'} text={'Image saved!'}></Alert>}

            <Card>
                <div className={classes.wrapper}>
                    {!hideOptions &&
                        <div className={classes.editor}>
                            <div className={classes['editor-title']}>Size:</div>
                            <div className={classes.options}>
                                <Input
                                    defaultValue={panelHeight}
                                    onChangeHandler={onChangeHeightInput}
                                    type={"number"}
                                    label={"Height"}
                                />

                                <span className={classes['size-divider']}>x</span>

                                <Input
                                    defaultValue={panelWidth}
                                    onChangeHandler={onChangeWidthInput}
                                    type={"number"}
                                    label={"Width"}
                                />
                            </div>

                            <div className={classes['background-color']} onClick={showBackgroundModal}>
                                Background: <span style={{ background: background }}></span>
                            </div>

                            {isComponentVisible &&
                                <div className={classes['background-modal']} ref={ref}>
                                    <GithubPicker
                                        color={background}
                                        onChangeComplete={changeBackgroundHandler}
                                        colors={circleColors}
                                    />
                                </div>}
                        </div>}

                    {!error &&
                        <div className={classes.actions}>
                            <Button onClickHandler={initialDrawingPanel}>
                                {buttonText}
                            </Button>

                            {hideOptions && <>
                                <Button onClickHandler={saveImageHandler}>
                                    Save image
                                </Button>

                                <Button onClickHandler={onExportImageHandler}>
                                    export as PNG
                                </Button>
                            </>}
                        </div>

                    }
                </div>
            </Card>
            {
                hideOptions && <DrawingPanel
                    panelRef={panelRef}
                    bgColor={background}
                    width={panelWidth}
                    height={panelHeight}
                />
            }
        </>
    )
}

export default Editor
