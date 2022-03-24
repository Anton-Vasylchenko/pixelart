import React from 'react';
import { useHistory } from "react-router-dom";

import './BackArrow.scss';
import BackImg from '../../../assets/img/arrow.png';

function BackArrow() {

    let history = useHistory();

    return (
        <div>
            <div className="back-arrow" onClick={() => history.goBack()}>
                <img src={BackImg} alt="return" />
            </div>
        </div>
    )
}

export default BackArrow;
