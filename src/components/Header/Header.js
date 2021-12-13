import React from 'react';
import Card from '../UI/Card';
import './Header.scss';
import Logo from '../../assets/img/logo.png'

function Header() {
    return (
        <Card className={"header"}>
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__title">
                PIXEL ART
            </div>
        </Card>
    )
}

export default Header
