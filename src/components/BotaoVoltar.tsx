import React from 'react';

interface BotaoVoltarProps {
    onClick: () => void;
}

const BotaoVoltar: React.FC<BotaoVoltarProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} style={{
            marginTop: '9px',
            marginLeft: '9px',
            backgroundColor: '#fff',
            borderRadius: '18px',
            cursor: 'pointer',
            fontSize: '24px', 
            padding: '10px 18px', 
            display: 'inline-flex', 
            alignItems: 'center',
            justifyContent: 'center',
            color: 'inherit',
            position: 'absolute',
            border: 'none',
        }}>
            &lt;
        </button>
    );
};

export default BotaoVoltar;
