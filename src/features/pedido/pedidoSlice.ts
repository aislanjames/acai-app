// src/features/pedido/pedidoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PedidoState {
  tamanho: 'PEQUENO' | 'MEDIO' | 'GRANDE' | '';
  sabor: string;
  complemento: string;
  valorTotal: string;
}

// Aqui é onde definimos o estado inicial baseado na interface acima
const initialState: PedidoState = {
  tamanho: '',
  sabor: '',
  complemento: '',
  valorTotal: '',
};

export const pedidoSlice = createSlice({
  name: 'pedido',
  initialState, // Aqui estamos passando o objeto initialState corretamente
  reducers: {
    setPedido: (state, action: PayloadAction<PedidoState>) => {
      // Com o spread operator, atualizamos todo o estado de uma só vez
      return { ...state, ...action.payload };
    },
  },
});

export const { setPedido } = pedidoSlice.actions;
export default pedidoSlice.reducer;

// Ajuste o seletor conforme a estrutura do seu store
export const selectPedido = (state: { pedido: PedidoState }) => state.pedido;
