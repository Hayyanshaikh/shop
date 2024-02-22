import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice.js'
import OrderSlice from './slices/OrderSlice.js'
import AuthSlice from './slices/AuthSlice.js'

const store = configureStore({
  reducer: {
    cart: CartSlice,
    order: OrderSlice,
    authentication: AuthSlice,
  },
});

export default store;
