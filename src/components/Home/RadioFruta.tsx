import React from 'react';

interface RadioFrutaProps {
    register: any;
}

const RadioFruta: React.FC<RadioFrutaProps> = ({ register }) => {
    return (
        <div>
            <label>Morango</label>
            <input {...register("sabor")} type="radio" value="MORANGO" />
            <label>Banana</label>
            <input {...register("sabor")} type="radio" value="BANANA" />
            <label>Kiwi</label>
            <input {...register("sabor")} type="radio" value="KIWI" />
        </div>
    );
};

export default RadioFruta;
