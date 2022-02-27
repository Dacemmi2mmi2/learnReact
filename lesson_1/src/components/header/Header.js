import React from 'react';
import './Header.css';
import maclaren from './img/McLaren_720S.jpg'

export function Header() {
    return <>
        <header className="Header">
            <div className="title">McLaren 720S</div>
            <img className="img__maclaren" src={maclaren} alt="maclaren 720s"/>
        </header>
    </>
}