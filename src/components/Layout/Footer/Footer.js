import React from 'react'
import Card from '../../UI/Card';
import TwitterIcon from '../../../assets/img/twitter.png';
import GithubIcon from '../../../assets/img/github.png';
import SteamIcon from '../../../assets/img/steam.png';

import classes from './Footer.module.scss';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <Card>
            <div className={classes.footer}>
                <div className={classes.year}>
                    {year}
                </div>
                <div className={classes.icons}>
                    <a href="https://twitter.com/a_dikusor" target="_blank" rel="noreferrer">
                        <div className={classes.icon}>
                            <img src={TwitterIcon} alt="twitter" />
                        </div>
                    </a>

                    <a href="https://github.com/Anton-Vasylchenko" target="_blank" rel="noreferrer">
                        <div className={classes.icon}>
                            <img src={GithubIcon} alt="github" />
                        </div>
                    </a>

                    <a href="https://steamcommunity.com/id/ad_serpent/" target="_blank" rel="noreferrer">
                        <div className={classes.icon}>
                            <img src={SteamIcon} alt="steam" />
                        </div>
                    </a>

                </div>
            </div>
        </Card >
    )
}

export default Footer
