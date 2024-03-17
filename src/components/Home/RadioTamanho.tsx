import React from 'react';
import { Produto } from '../../features/types';

interface RadioTamanhoProps {
  register: any;
  tamanhos: Produto[];
}

const RadioTamanho: React.FC<RadioTamanhoProps> = ({ register, tamanhos }) => {
  return (
    <div>
      {tamanhos.map((tamanho) => (
        <div key={tamanho.id}>
          <label>{tamanho.nome}</label>
          <input {...register("tamanho")} type="radio" value={tamanho.nome} />
        </div>
      ))}
    </div>
  );
};

export default RadioTamanho;
