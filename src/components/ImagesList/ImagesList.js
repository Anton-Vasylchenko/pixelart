import React from 'react';
import ImagesListItem from '../ImagesListItem';

import classes from './ImagesList.module.scss';

function ImagesList(props) {

    const imagesList = props.images.map(el => {
        return <ImagesListItem key={el.id} image={el} />
    })

    return (
        <div
            className={classes.wrapper}>
            {
                imagesList.length ?
                    imagesList :
                    <p className="empty"> No images </p>
            }
        </div>
    )
}

export default ImagesList