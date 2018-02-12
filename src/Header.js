import React from 'react';
import Logo from './logo.svg'
import './Header.css'



const Header = ({ title }) => {
    return (
        <div className={'wrapper'}>
            <div className={'logo-wrapper'}>
                <img className="logo-image" src={Logo} />
            </div>
            <div className="header-title">{title}</div>
        </div>
    );
};

export default Header;