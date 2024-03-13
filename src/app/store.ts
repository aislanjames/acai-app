import { configureStore } from '@reduxjs/toolkit';
import pedidoReducer from '../features/pedido/pedidoSlice';

export const store = configureStore({
  reducer: {
    pedido: pedidoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
