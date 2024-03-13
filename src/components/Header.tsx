import React from 'react';
import logo from '../assets/img/peca-acai.svg';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logotipo" />
        </header>
    );
};


export default Header;
