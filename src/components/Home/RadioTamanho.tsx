import React from 'react';

interface RadioTamanhoProps {
    register: any;
}

const RadioTamanho: React.FC<RadioTamanhoProps> = ({ register }) => {
    return (
        <div>
            <label>Pequeno</label>
            <input {...register("tamanho")} type="radio" value="PEQUENO" />
            <label>Médio</label>
            <input {...register("tamanho")} type="radio" value="MEDIO" />
            <label>Grande</label>
            <input {...register("tamanho")} type="radio" value="GRANDE" />
        </div>
    );
};

export default RadioTamanho;
