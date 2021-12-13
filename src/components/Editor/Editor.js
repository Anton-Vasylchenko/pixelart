import React, { useState } from 'react';
import DrawingPanel from '../DrawingPanel';
import { GithubPicker } from 'react-color';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Card from '../UI/Card';
import useComponentVisible from '../../hooks/useComponentVisible';

import './Editor.scss';
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
            setError('Width must be less than 50 and more than 2')
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
        !hideOptions ? setButtonText("reset dimensions") : setButtonText("start");
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
                {!hideOptions &&
                    <div className="editor">
                        <div className="editor-title">Dimensions:</div>
                        <div className="options">
                            <Input
                                defaultValue={panelHeight}
                                onChangeHandler={onChangeHeightInput}
                                type={"number"}
                                label={"Height"}
                            />

                            <span className='size-divider'>x</span>

                            <Input
                                defaultValue={panelWidth}
                                onChangeHandler={onChangeWidthInput}
                                type={"number"}
                                label={"Width"}
                            />
                        </div>

                        <div className="background-color" onClick={showBackgroundModal}>
                            Background color: <span style={{ background: background }}></span>
                        </div>

                        {isComponentVisible &&
                            <div className="background-modal" ref={ref}>
                                <GithubPicker
                                    color={background}
                                    onChangeComplete={changeBackgroundHandler}
                                    colors={['#ffffff', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB']}
                                />
                            </div>}
                    </div>}

                {!error && <Button onClickHandler={initialDrawingPanel} buttonText={buttonText} />}
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
