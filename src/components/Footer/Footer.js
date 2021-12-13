import React from 'react'
import Card from '../UI/Card';

import './Footer.scss';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <Card className="footer">
            {year}
        </Card>
    )
}

export default Footer
