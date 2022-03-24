import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ImagesListItem.module.scss';

function ImagesListItem({ image }) {
    return (
        <>
            <div className={classes.wrapper}>
                <Link key={image.id} to={`/images/${image.id}`}>
                    <div className={classes.image}>
                        <img src={image.img} alt="pixel-art" />
                    </div>
                </Link>

                <div className={classes.bottom}>
                    <div className={classes.date}>
                        {image.date}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ImagesListItem