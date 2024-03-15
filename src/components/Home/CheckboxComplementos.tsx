import React from 'react';

interface CheckboxComplementosProps {
    register: any;
}

const CheckboxComplementos: React.FC<CheckboxComplementosProps> = ({ register }) => {
    return (
        <div>
            <label>Granola</label>
            <input {...register("complementos.granola")} type="checkbox" />
            <label>Paçoca</label>
            <input {...register("complementos.pacoca")} type="checkbox" />
            <label>Leite Ninho</label>
            <input {...register("complementos.leiteninho")} type="checkbox" />
        </div>
    );
};

export default CheckboxComplementos;
