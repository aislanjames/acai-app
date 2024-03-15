import React from 'react';

interface CheckboxComplementosProps {
    register: any;
}

const CheckboxComplementos: React.FC<CheckboxComplementosProps> = ({ register }) => {
    return (
        <div id='complemento' className='itens'>
            <div id="complemento_granola">
                <label>Granola</label>
                <input {...register("complementos.granola")} type="checkbox" />
            </div>
            <div id="complemento_pacoca">
                <label>Paçoca</label>
                <input {...register("complementos.pacoca")} type="checkbox" />
            </div>
            <div id="complemento_leiteninho">
                <label>Leite Ninho</label>
                <input {...register("complementos.leiteninho")} type="checkbox" />
            </div>
        </div>
    );
};

export default CheckboxComplementos;
