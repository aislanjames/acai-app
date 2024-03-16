import React from 'react';
import logo from '../assets/img/peca-acai.svg';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <a href="/">
                <img src={logo} alt="Logotipo" />
            </a>
        </header>
    );
};


export default Header;
