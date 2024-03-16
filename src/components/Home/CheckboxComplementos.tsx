import React from 'react';
import { Produto } from '../../features/types/index'; 

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
                    {/* Incluir a imagem do complemento se necessário */}
                    {/* <img src={complemento.avatar} alt={`Imagem de ${complemento.nome}`} /> */}
                </div>
            ))}
        </div>
    );
};

export default CheckboxComplementos;