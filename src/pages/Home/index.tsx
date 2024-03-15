import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { acaiSchema } from '../../validation';
import { useDispatch } from 'react-redux';
import { setPedido } from '../../features/pedido/pedidoSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import RadioTamanho from '../../components/Home/RadioTamanho';
import RadioFruta from '../../components/Home/RadioFruta';
import CheckboxComplementos from '../../components/Home/CheckboxComplementos';
import './Home.css';

type FormValues = {
    tamanho: 'PEQUENO' | 'MEDIO' | 'GRANDE';
    sabor: 'MORANGO' | 'BANANA' | 'KIWI';
    complementos: {
        granola: boolean;
        pacoca: boolean;
        leiteninho: boolean;
    };
};

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(acaiSchema),
    });

    const [showFooter, setShowFooter] = useState(false);
    const sabor = watch("sabor");
    const tamanho = watch("tamanho");
    const complementos = watch("complementos");
    const [valorTotal, setValorTotal] = useState(0);
    const [quantidade, setQuantidade] = useState(1);

    useEffect(() => {
        const allFieldsFilled = sabor && tamanho && Object.values(complementos || {}).some(v => v); // Corrigido para garantir que complementos não seja undefined
        setShowFooter(allFieldsFilled);

        let baseValor = tamanho === 'PEQUENO' ? 10 : tamanho === 'MEDIO' ? 12 : tamanho === 'GRANDE' ? 15 : 0;
        const complementoValor = Object.values(complementos || {}).filter(Boolean).length * 3; // Corrigido para garantir que complementos não seja undefined
        const total = (baseValor + complementoValor) * quantidade;

        setValorTotal(total);
    }, [sabor, tamanho, complementos, quantidade]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const complementosSelecionados = Object.entries(data.complementos)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(', ');

        // Altere aqui conforme a estrutura esperada pelo seu slice do Redux
        const payload = {
            ...data,
            complemento: complementosSelecionados, // Ajustando para o formato esperado
        };

        dispatch(setPedido(payload));
        navigate('/pedido');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Açaí Natural</h1>
            
            <RadioFruta register={register} />
            {errors.sabor && <p>O sabor é obrigatório.</p>}

            <RadioTamanho register={register} />
            {errors.tamanho && <p>O tamanho é obrigatório.</p>}

            <CheckboxComplementos register={register} />

            {showFooter && (
                <Footer onSubmit={handleSubmit(onSubmit)} valorTotal={`R$ ${valorTotal.toFixed(2)}`} quantidade={quantidade} setQuantidade={setQuantidade} />
            )}
        </form>
    );
};
