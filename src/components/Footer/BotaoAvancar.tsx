import React from 'react';

interface BotaoAvancarProps {
  valorTotal: string;
  onSubmit: () => void;
}

const BotaoAvancar: React.FC<BotaoAvancarProps> = ({ valorTotal, onSubmit }) => {
  return (
    <button id="btn-avancar" onClick={onSubmit}>Avançar<span id="valor">{valorTotal}</span></button>
  );
};

export default BotaoAvancar;
