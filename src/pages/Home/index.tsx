import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { acaiSchema } from '../../validation';
import { useDispatch } from 'react-redux';
import { setPedido } from '../../features/pedido/pedidoSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import RadioTamanho from '../../components/Home/RadioTamanho';
import RadioFruta from '../../components/Home/RadioFruta';
import CheckboxComplementos from '../../components/Home/CheckboxComplementos';
import BotaoVoltar from '../../components/BotaoVoltar';
import '../../components/Home/Home.css';

type FormValues = {
    tamanho: 'PEQUENO' | 'MEDIO' | 'GRANDE';
    sabor: string;
    complementos: {
        granola: boolean;
        pacoca: boolean;
        leiteninho: boolean;
    };
};

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantidade, setQuantidade] = useState(1);
    const [valorTotal, setValorTotal] = useState(10); // Inicializa com o valor para 'PEQUENO'
    const [etapaAtual, setEtapaAtual] = useState(1); // Controle de etapas para o "slider"

    const { register, watch, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            tamanho: 'PEQUENO',
            sabor: '',
            complementos: {},
        },
        resolver: zodResolver(acaiSchema),
    });

    const tamanho = watch("tamanho");
    const sabor = watch("sabor");
    const complementos = watch("complementos");

    useEffect(() => {
        let baseValor = tamanho === 'PEQUENO' ? 10 : tamanho === 'MEDIO' ? 12 : 15;
        let complementoValor = 0;
    
        if (complementos.granola) complementoValor += 3;
        if (complementos.pacoca) complementoValor += 5;
        if (complementos.leiteninho) complementoValor += 4;
    
        let total = (baseValor + complementoValor) * quantidade;
        setValorTotal(total);
    }, [tamanho, quantidade, complementos.granola, complementos.pacoca, complementos.leiteninho]);
    
    const onSubmitData = () => {
        const complementosSelecionados = [];
        if (complementos.granola) complementosSelecionados.push('Granola');
        if (complementos.pacoca) complementosSelecionados.push('Paçoca');
        if (complementos.leiteninho) complementosSelecionados.push('Leite Ninho');

        const payload = {
            tamanho,
            sabor,
            complemento: complementosSelecionados.join(', ') || 'NENHUM',
            valorTotal: valorTotal.toFixed(2),
        };

        dispatch(setPedido(payload));
        navigate('/pedido');
    };

    const avancarParaProximaEtapa = () => {
        if (etapaAtual < 3) {
            setEtapaAtual(etapaAtual + 1);
        } else {
            onSubmitData();
        }
    };

    const voltarEtapa = () => {
        if (etapaAtual > 1) {
            setEtapaAtual(etapaAtual - 1);
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <BotaoVoltar onClick={voltarEtapa} />
            <h1>Açaí Natural</h1>
            {etapaAtual === 1 && <RadioTamanho register={register} />}
            {etapaAtual === 2 && <RadioFruta register={register} />}
            {etapaAtual === 3 && <CheckboxComplementos register={register} />}
            <Footer
                onSubmit={avancarParaProximaEtapa}
                valorTotal={`R$ ${valorTotal.toFixed(2)}`}
                quantidade={quantidade}
                setQuantidade={setQuantidade}
            />
        </form>
    );
};
