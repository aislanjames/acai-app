import React from 'react';
import { Produto } from '../../features/types'; // Ajuste o caminho conforme necessário

interface CheckboxComplementosProps {
  register: any;
  complementos: Produto[];
}

const CheckboxComplementos: React.FC<CheckboxComplementosProps> = ({ register, complementos }) => {
    return (
        <div id='complemento' className='itens'>
            {complementos.map(complemento => (
                <div key={complemento.id} id={`complemento_${complemento.nome.toLowerCase().replace(/\s+/g, '_')}`}>
                    <label htmlFor={`complemento_${complemento.nome}`}>{complemento.nome}</label>
                    <input {...register(`complementos.${complemento.nome.toLowerCase().replace(/\s+/g, '_')}`)} id={`complemento_${complemento.nome}`} type="checkbox" />
                </div>
            ))}
        </div>
    );
};

export default CheckboxComplementos;
