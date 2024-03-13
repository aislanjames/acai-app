import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div id="opcao-de-quantidade">
                <button id="menos">-</button>
                <div id="quantidade">1</div>
                <button id="mais">+</button>
            </div>
            <a id="btn-avancar" href="/pedido">
                <p>Avançar</p>
                <span id="valor">R$ 18,00</span>
            </a>
        </footer>
    );
};

export default Footer;
