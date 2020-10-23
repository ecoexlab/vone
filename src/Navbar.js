import React from 'react'
import icon_hamburger from './assets/icon-hamburger.png';
import icon_clock from './assets/icon-clock.png';
import './Navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={icon_clock}></img>
            <img src={icon_hamburger}></img>
        </div>
    )
}
