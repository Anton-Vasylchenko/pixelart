import React, { useState } from 'react';
import DrawingPanel from '../DrawingPanel';
import { GithubPicker } from 'react-color';
import circleColors from '../../config/circlePickerConfig';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Input from '../UI/Input';
import useComponentVisible from '../../hooks/useComponentVisible';

import classes from './Editor.module.scss';
import Alert from '../UI/Alert';

function Editor() {
    const [panelWidth, setPanelWidth] = useState(16)
    const [panelHeight, setPanelHeight] = useState(16)
    const [hideOptions, setHideOptions] = useState(false)
    const [buttonText, setButtonText] = useState("start")
    const [background, setBackground] = useState("#ffffff")
    const [error, setError] = useState(false)
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const initialDrawingPanel = () => {
        if (panelWidth > 50 || panelWidth < 2) {
            setError('Max size is 50 x 50')
            return;
        }

        if (panelHeight > 50 || panelHeight < 2) {
            setError('Height must be less than 50 and more than 2')
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

    return (
        <>
            {error && <Alert text={error}></Alert>}
            <Card>
                <div className={classes.wrapper}>
                    {!hideOptions &&
                        <div className={classes.editor}>
                            <div className={classes['editor-title']}>Options:</div>
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

                    {!error && <Button onClickHandler={initialDrawingPanel}>{buttonText}</Button>}
                </div>
            </Card>
            {
                hideOptions && <DrawingPanel
                    bgColor={background}
                    width={panelWidth}
                    height={panelHeight}
                />
            }
        </>
    )
}

export default Editor
