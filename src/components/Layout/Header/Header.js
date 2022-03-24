import React from 'react';
import { Link } from 'react-router-dom';

import MainNavigation from '../MainNavigation';

import Logo from '../../../assets/img/logo.png';
import classes from './Header.module.scss';
import Card from '../../UI/Card';

function Header() {
    return (
        <Card className={classes.header}>
            <div className={classes.header__logo}>
                <div className={classes.logo__img}>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={classes.logo__title}>
                    <Link to="/">PIXEL ART</Link>
                </div>
            </div>

            <MainNavigation />
        </Card>
    )
}

export default Header
