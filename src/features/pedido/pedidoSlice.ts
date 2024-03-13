import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface PedidoState {
  sabor: string;
  tamanho: string;
  complemento: string;
}

const initialState: PedidoState = {
  sabor: '',
  tamanho: '',
  complemento: '',
};

export const pedidoSlice = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    setPedido: (state, action: PayloadAction<PedidoState>) => {
      state.sabor = action.payload.sabor;
      state.tamanho = action.payload.tamanho;
      state.complemento = action.payload.complemento;
    },
  },
});

export const { setPedido } = pedidoSlice.actions;

export const selectPedido = (state: RootState) => state.pedido;

export default pedidoSlice.reducer;
