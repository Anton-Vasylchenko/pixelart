import React from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/useHttp';
import Loader from '../../components/UI/Loader';
import { getSingleImage } from '../../lib/api';
import Card from '../../components/UI/Card';

import classes from './ImageDetail.module.scss';

function ImageDetail() {
    const { imageId } = useParams();

    const { sendRequest, status, data: loadedImage } = useHttp(getSingleImage, true);

    React.useEffect(() => {
        sendRequest({ imageId });
    }, [sendRequest, imageId])

    if (status === 'pending') {
        return <Card>
            <Loader />
        </Card>
    }

    if (!loadedImage) {
        return <Card>
            <div className="empty">Page no found</div>
        </Card>
    }

    return (
        <Card className={classes['image-details']}>
            <div className={classes['image-wrapper']}>
                <img src={loadedImage.image} alt="pixel art" />
            </div>

            <div className={classes.info}>
                <div className={classes.date}>
                    {loadedImage.date}
                </div>
            </div>
        </Card>
    )
}

export default ImageDetail