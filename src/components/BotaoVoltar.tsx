import React from 'react';

interface BotaoVoltarProps {
    onClick: () => void; // Função para ser chamada ao clicar no botão
}

const BotaoVoltar: React.FC<BotaoVoltarProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} style={{ marginTop: '20px' }}>
            Voltar
        </button>
    );
};

export default BotaoVoltar;
