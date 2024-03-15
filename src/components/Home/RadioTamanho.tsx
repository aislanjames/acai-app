import React from 'react';

interface RadioTamanhoProps {
    register: any;
}

const RadioTamanho: React.FC<RadioTamanhoProps> = ({ register }) => {
    return (
        <div id='tamanhos' className="itens">
            <div id="tamanho_pequeno">
                <label>Pequeno</label>
                <input {...register("tamanho")} type="radio" value="PEQUENO" />
            </div>
            <div id="tamanho_medio">
                <label>Médio</label>
                <input {...register("tamanho")} type="radio" value="MEDIO" />
            </div>
            <div id="tamanho_grande">
                <label>Grande</label>
                <input {...register("tamanho")} type="radio" value="GRANDE" />
            </div>
        </div>
    );
};

export default RadioTamanho;
