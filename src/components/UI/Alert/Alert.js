import React from 'react';
import Card from '../Card';

import './Alert.scss';

function Alert({ text, type }) {
    return (
        <Card className={type ? `${type}` : 'alert'}>
            {text}
        </Card>
    )
}

export default Alert
