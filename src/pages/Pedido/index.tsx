import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import './Pedido.css';

export const Pedido = () => {
    const pedido = useSelector((state: RootState) => state.pedido);

    const calcularValorETempo = () => {
        let valor = pedido.valorTotal; // Utiliza diretamente o valor total calculado anteriormente
        let tempo = 0;

        // Define o tempo baseado no tamanho
        switch (pedido.tamanho) {
            case 'Pequeno - 300ML':
                tempo += 5;
                break;
            case 'Médio - 500ML':
                tempo += 7;
                break;
            case 'Grande - 700ML':
                tempo += 9;
                break;
            default:
                // Valores padrão ou mensagem de erro
                break;
        }

        // O valor já inclui os complementos, então não é necessário adicionar novamente
        return { valor, tempo };
    };

    const { valor, tempo } = calcularValorETempo();

    return (
        <div className='container'>
            <h2>Meu Pedido</h2>
            <p><strong>Sabor:</strong> {pedido.sabor}</p>
            <p><strong>Tamanho:</strong> {pedido.tamanho}</p>
            <p><strong>Complemento(s):</strong> {pedido.complementos.join(', ') || 'Nenhum'}</p>
            <p><strong>Valor Total:</strong> R$ {valor.toFixed(2)}</p> {/* Ajustado para utilizar valor calculado */}
            <p><strong>Tempo de Entrega Estimado:</strong> {tempo} minutos</p> {/* Ajustado para utilizar tempo calculado */}
        </div>
    );
};
