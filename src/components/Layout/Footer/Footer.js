import React from 'react'
import Card from '../../UI/Card';

import classes from './Footer.module.scss';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <Card>
            <div className={classes.footer}>
                {year} | Create by Dikusor (:
            </div>
        </Card>
    )
}

export default Footer
