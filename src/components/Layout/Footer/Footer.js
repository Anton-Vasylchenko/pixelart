import React from 'react'
import Card from '../../UI/Card';

import classes from './Footer.module.scss';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <Card>
            <div className={classes.footer}>
                {year} | Created by Dikusor (:
            </div>
        </Card>
    )
}

export default Footer
