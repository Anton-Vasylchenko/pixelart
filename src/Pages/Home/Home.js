import React, { useEffect } from 'react';
import Card from '../../components/UI/Card';
import useHttp from '../../hooks/useHttp';
import ImagesList from '../../components/ImagesList';
import Loader from '../../components/UI/Loader';
import { getAllImages } from '../../lib/api';

function Home() {
    const { sendRequest, data: loadedImages } = useHttp(getAllImages, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    return (
        <Card>
            {loadedImages && <ImagesList images={loadedImages} />}
            {!loadedImages && <Loader />}
        </Card>
    )
}

export default Home