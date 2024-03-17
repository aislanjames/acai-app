import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { acaiSchema } from '../../validation';
import { useDispatch } from 'react-redux';
import { setPedido } from '../../features/pedido/pedidoSlice';
import { useNavigate } from 'react-router-dom';
import { fetchProdutos } from '../../services/mockApi';
import RadioTamanho from '../../components/Home/RadioTamanho';
import RadioFruta from '../../components/Home/RadioFruta';
import CheckboxComplementos from '../../components/Home/CheckboxComplementos';
import Footer from '../../components/Footer/Footer';
import BotaoVoltar from '../../components/BotaoVoltar';
import produtoImg from '../../assets/img/Banner.png';
import '../../components/Home/Home.css';

interface Produto {
    id: string;
    tipo: 'tamanho' | 'sabor' | 'complemento';
    nome: string;
    valor?: string;
    avatar: string;
}

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

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm<FormValues>({
        resolver: zodResolver(acaiSchema),
    });

    useEffect(() => {
        const loadData = async () => {
            const produtosData: Produto[] = await fetchProdutos();
            setProdutos(produtosData);
        };

        loadData();
    }, []);

    useEffect(() => {
        if (produtos.length > 0) {
            const tamanhoInicial = produtos.find(p => p.tipo === 'tamanho')?.nome || '';
            setValue('tamanho', tamanhoInicial);
            const formData = getValues();
            calculateAndUpdateTotal(formData);
        }
    }, [produtos, setValue, getValues]);

    const calculateAndUpdateTotal = (formData: FormValues) => {
        let total = 0;
        // Implementação do cálculo do total
        setValorTotal(total);
    };

    const onSubmitData = (data: FormValues) => {
        calculateAndUpdateTotal(data);
        const complementosSelecionados = Object.keys(data.complementos)
            .filter(key => data.complementos[key]); // Filtra apenas os complementos selecionados
    
        dispatch(setPedido({
            tamanho: data.tamanho,
            sabor: data.sabor,
            complementos: complementosSelecionados, // Passa o array de strings
            valorTotal: valorTotal,
        }));
        navigate('/pedido');
    };    

    useEffect(() => {
        const subscription = watch(() => {
            calculateAndUpdateTotal(getValues());
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <section>
            <div id='produto' className='container'>
                <BotaoVoltar onClick={() => { }} />
                <img src={produtoImg} alt="Açaí" />
            </div>
            <form className='container' onSubmit={handleSubmit(onSubmitData)}>
                {etapaAtual === 1 && <RadioTamanho register={register} tamanhos={produtos.filter(p => p.tipo === 'tamanho')} />}
                {etapaAtual === 2 && <RadioFruta register={register} sabores={produtos.filter(p => p.tipo === 'sabor')} />}
                {etapaAtual === 3 && <CheckboxComplementos register={register} complementos={produtos.filter(p => p.tipo === 'complemento')} />}
                <Footer onSubmit={() => handleSubmit(onSubmitData)} valorTotal={`R$ ${valorTotal.toFixed(2)}`} quantidade={quantidade} setQuantidade={setQuantidade} />
            </form>
        </section>
    );
};
