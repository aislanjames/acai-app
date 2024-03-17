import React from 'react';
import { Produto } from '../../features/types'; // Ajuste o caminho conforme necessário

interface RadioFrutaProps {
  register: any;
  sabores: Produto[];
}

const RadioFruta: React.FC<RadioFrutaProps> = ({ register, sabores }) => {
  return (
    <div id='sabor' className='itens'>
      {sabores.map((sabor) => (
        <div key={sabor.id} id={`sabor_${sabor.nome.toLowerCase()}`}>
          <label>{sabor.nome}</label>
          <input {...register("sabor")} type="radio" value={sabor.nome} />
        </div>
      ))}
    </div>
  );
};

export default RadioFruta;
