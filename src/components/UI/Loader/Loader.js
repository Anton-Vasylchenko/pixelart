import React from 'react';
import LoaderAnimation from '../../../assets/img/loaderAnimation.gif'

import classes from './Loader.module.scss';

function Loader() {
    return (
        <div className={classes.loader}>
            <img src={LoaderAnimation} alt="loading" />
        </div>
    )
}

export default Loader