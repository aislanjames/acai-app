import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { acaiSchema } from '../../validation';
import { useDispatch } from 'react-redux';
import { setPedido } from '../../features/pedido/pedidoSlice';
import { useNavigate } from 'react-router-dom';
import { fetchProdutos } from '../../services/mockApi';
import { Produto } from '../../features/types/index';
import RadioTamanho from '../../components/Home/RadioTamanho';
import RadioFruta from '../../components/Home/RadioFruta';
import CheckboxComplementos from '../../components/Home/CheckboxComplementos';
import Footer from '../../components/Footer/Footer';
import BotaoVoltar from '../../components/BotaoVoltar';
import produtoImg from '../../assets/img/Banner.png';
import '../../components/Home/Home.css';

type FormValues = {
    tamanho: string;
    sabor: string;
    complementos: Record<string, boolean>;
};

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantidade, setQuantidade] = useState(1);
    const [valorTotal, setValorTotal] = useState(0);
    const [etapaAtual, setEtapaAtual] = useState(1);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { register, handleSubmit, watch, getValues, setValue } = useForm<FormValues>({
        resolver: zodResolver(acaiSchema),
    });

    useEffect(() => {
        const loadData = async () => {
            const produtosData: Produto[] = await fetchProdutos();
            setProdutos(produtosData);
            const tamanhoInicial = produtosData.find(p => p.tipo === 'tamanho')?.nome || '';
            setValue('tamanho', tamanhoInicial);
            calculateAndUpdateTotal(getValues(), quantidade);
        };
        loadData();
    }, []);

    const calculateAndUpdateTotal = (data: FormValues, quantidade: number) => {
        let totalValor = 0;
        // Calcula o valor total com base em data e quantidade
        // Aqui você irá calcular o totalValor com base no tamanho, sabor, complementos e quantidade
        setValorTotal(totalValor);
    };

    const onSubmitData = (data: FormValues) => {
        const totalValor = calculateAndUpdateTotal(data, quantidade);
        dispatch(setPedido({
            tamanho: data.tamanho,
            sabor: data.sabor,
            complementos: Object.keys(data.complementos).filter(k => data.complementos[k]).join(', '),
            valorTotal: totalValor.toString(), // O Redux espera uma string aqui
        }));
        navigate('/pedido');
    };

    useEffect(() => {
        const subscription = watch((value) => {
            calculateAndUpdateTotal(value, quantidade);
        });
        return () => subscription.unsubscribe();
    }, [watch, quantidade]);

    useEffect(() => {
        calculateAndUpdateTotal(getValues(), quantidade);
    }, [quantidade]);

    const avancarParaProximaEtapa = () => {
        if (etapaAtual < 3) {
            setEtapaAtual(etapaAtual + 1);
        } else {
            handleSubmit(onSubmitData)();
        }
    };

    const voltarEtapa = () => {
        if (etapaAtual > 1) {
            setEtapaAtual(etapaAtual - 1);
        }
    };

    return (
        <section>
            {/* Marcação... */}
            <form className='container' onSubmit={handleSubmit(onSubmitData)}>
                {/* Componentes... */}
                <Footer
                    onSubmit={handleSubmit(onSubmitData)} // Correção: diretamente passar onSubmitData
                    valorTotal={`R$ ${valorTotal.toFixed(2)}`}
                    quantidade={quantidade}
                    setQuantidade={setQuantidade}
                />
            </form>
        </section>
    );
};
