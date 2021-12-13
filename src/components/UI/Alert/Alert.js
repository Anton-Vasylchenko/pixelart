import React from 'react';
import Card from '../Card';

import './Alert.scss';

function Alert({ text }) {
    return (
        <Card className="alert">
            {text}
        </Card>
    )
}

export default Alert
