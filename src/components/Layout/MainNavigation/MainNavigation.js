import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.scss';

function MainNavigation() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink
                        activeClassName={classes.active}
                        exact={true}
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={classes.active}
                        to="/paint">Paint</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation