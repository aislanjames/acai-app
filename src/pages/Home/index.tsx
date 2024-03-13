import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { acaiSchema } from '../../validation'; // Ajuste o caminho conforme necessário
import { useDispatch } from 'react-redux';
import { setPedido } from '../../features/pedido/pedidoSlice';
import { useNavigate } from 'react-router-dom';

type FormValues = {
    sabor: 'MORANGO' | 'BANANA' | 'KIWI';
    tamanho: 'PEQUENO' | 'MEDIO' | 'GRANDE';
    complemento: 'GRANOLA' | 'PAÇOCA' | 'LEITE NINHO' | 'NENHUM';
};

export const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(acaiSchema),
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(setPedido(data));
        navigate('/pedido'); // Redireciona para a página de pedido
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Açaí Natural</h1>
                <label>Sabor:</label>
                <select {...register('sabor')}>
                    <option value="">Selecione um sabor</option>
                    <option value="MORANGO">Morango</option>
                    <option value="BANANA">Banana</option>
                    <option value="KIWI">Kiwi</option>
                </select>
                {errors.sabor && <p>O sabor é obrigatório.</p>}
            </div>
            <div>
                <label>Tamanho:</label>
                <select {...register('tamanho')}>
                    <option value="">Selecione um tamanho</option>
                    <option value="PEQUENO">Pequeno (300ml)</option>
                    <option value="MEDIO">Médio (500ml)</option>
                    <option value="GRANDE">Grande (700ml)</option>
                </select>
                {errors.tamanho && <p>O tamanho é obrigatório.</p>}
            </div>
            <div>
                <label>Complemento:</label>
                <select {...register('complemento')}>
                    <option value="">Selecione um complemento</option>
                    <option value="GRANOLA">Granola</option>
                    <option value="PAÇOCA">Paçoca</option>
                    <option value="LEITE NINHO">Leite Ninho</option>
                    <option value="NENHUM">Nenhum</option>
                </select>
                {errors.complemento && <p>O complemento é obrigatório.</p>}
            </div>
            <button type="submit">Avançar</button>
        </form>
    );
};
