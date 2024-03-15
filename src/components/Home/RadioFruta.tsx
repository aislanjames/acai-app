import React from 'react';

interface RadioFrutaProps {
    register: any;
}

const RadioFruta: React.FC<RadioFrutaProps> = ({ register }) => {
    return (
        <div id='sabor' className='itens'>
            <div id="fruta_morango">
                <label>Morango</label>
                <input {...register("sabor")} type="radio" value="MORANGO" />
            </div>
            <div id="fruta_banana">
                <label>Banana</label>
                <input {...register("sabor")} type="radio" value="BANANA" />
            </div>
            <div id="fruta_kiwi">
                <label>Kiwi</label>
                <input {...register("sabor")} type="radio" value="KIWI" />
            </div>
        </div>
    );
};

export default RadioFruta;
