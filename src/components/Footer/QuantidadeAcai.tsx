import React from 'react';

interface QuantidadeAcaiProps {
  quantidade: number;
  setQuantidade: React.Dispatch<React.SetStateAction<number>>;
}

const QuantidadeAcai: React.FC<QuantidadeAcaiProps> = ({ quantidade, setQuantidade }) => {
  return (
    <div id="opcao-de-quantidade">
      <button id="menos" onClick={() => setQuantidade(quantidade - 1)}>-</button>
      <div id="quantidade">{quantidade}</div>
      <button id="mais" onClick={() => setQuantidade(quantidade + 1)}>+</button>
    </div>
  );
};

export default QuantidadeAcai;
