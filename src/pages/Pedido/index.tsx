import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import './Pedido.css';


export const Pedido = () => {
    // Acessa o estado do pedido usando o useSelector e o seletor selectPedido
    const pedido = useSelector((state: RootState) => state.pedido);

    // Adicione esta função dentro do componente Pedido, antes do return
    const calcularValorETempo = () => {
        let valor = 0;
        let tempo = 0;

        // Define o valor e o tempo baseado no tamanho
        switch (pedido.tamanho) {
            case 'PEQUENO':
                valor += 10;
                tempo += 5;
                break;
            case 'MEDIO':
                valor += 12;
                tempo += 7;
                break;
            case 'GRANDE':
                valor += 15;
                tempo += 9;
                break;
            default:
                // Valores padrão ou mensagem de erro
                break;
        }

        // Incrementa o valor se houver complemento
        if (pedido.complemento !== 'NENHUM') {
            valor += 3; // Assume um valor fixo para simplificação
        }

        return { valor, tempo };
    };

    const { valor, tempo } = calcularValorETempo();

    return (
        <div>
            <h2>Meu Pedido</h2>
            <p><strong>Sabor:</strong> {pedido.sabor}</p>
            <p><strong>Tamanho:</strong> {pedido.tamanho}</p>
            <p><strong>Complemento(s):</strong> {pedido.complemento || 'Nenhum'}</p>
            <p><strong>Valor Total:</strong> R$ {pedido.valorTotal}</p>
            <p><strong>Tempo de Entrega Estimado:</strong> {
                pedido.tamanho === 'PEQUENO' ? '5 minutos' :
                pedido.tamanho === 'MEDIO' ? '7 minutos' : '9 minutos'
            }</p>
        </div>
    );
};
