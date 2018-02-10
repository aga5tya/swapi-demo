import React from 'react';
import Logo from './logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className={'wrapper'}>
            <div className={'logo-wrapper'}>
                <img className="logo-image" src={Logo} />
            </div>
            <div className="header-title">(Movie and Films trivia)</div>
        </div>
    );
};

export default Header;