import React from 'react';
import { Produto } from '../../features/types/index'; 

interface RadioTamanhoProps {
  register: any;
  tamanhos: Produto[];
}

const RadioTamanho: React.FC<RadioTamanhoProps> = ({ register, tamanhos }) => {
  return (
    <div id='tamanhos' className="itens">
      {tamanhos.map((tamanho) => (
        <div key={tamanho.id} id={`tamanho_${tamanho.nome.toLowerCase()}`}>
          <label>{tamanho.nome}</label>
          <input {...register("tamanho")} type="radio" value={tamanho.nome} />
          {/* Exemplo de como incluir avatar se necessário */}
          {/* <img src={tamanho.avatar} alt={tamanho.nome} /> */}
        </div>
      ))}
    </div>
  );
};

export default RadioTamanho;
