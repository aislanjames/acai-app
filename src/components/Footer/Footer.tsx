import React from 'react';
import './Footer.css';
import QuantidadeAcai from './QuantidadeAcai';
import BotaoAvancar from './BotaoAvancar';

interface FooterProps {
  onSubmit: () => void;
  valorTotal: string;
  quantidade: number;
  setQuantidade: React.Dispatch<React.SetStateAction<number>>;
}

const Footer: React.FC<FooterProps> = ({ onSubmit, valorTotal, quantidade, setQuantidade }) => {
    return (
        <footer className="footer-mobile">
            <QuantidadeAcai quantidade={quantidade} setQuantidade={setQuantidade} />
            <BotaoAvancar valorTotal={valorTotal} onSubmit={onSubmit} />
        </footer>
    );
};

export default Footer;
