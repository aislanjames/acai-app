import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PedidoState {
  tamanho: string;
  sabor: string;
  complementos: string[];
  valorTotal: number; // Corrigido para ser do tipo number
}

const initialState: PedidoState = {
  tamanho: '',
  sabor: '',
  complementos: [],
  valorTotal: 0, // Inicializado como 0, que é um valor number
};

export const pedidoSlice = createSlice({
  name: 'pedido',
  initialState, // Aqui estamos passando o objeto initialState corretamente
  reducers: {
    setPedido: (state, action: PayloadAction<PedidoState>) => {
      // Atualiza o estado com os novos dados do pedido
      return { ...state, ...action.payload };
    },
  },
});

export const { setPedido } = pedidoSlice.actions;
export default pedidoSlice.reducer;

// Ajuste o seletor conforme a estrutura do seu store
export const selectPedido = (state: { pedido: PedidoState }) => state.pedido;
