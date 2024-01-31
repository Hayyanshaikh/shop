import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice.js'
import OrderSlice from './slices/OrderSlice.js'
import InvoiceSlice from './slices/InvoiceSlice.js'
import AuthSlice from './slices/AuthSlice.js'

const store = configureStore({
  reducer: {
    cart: CartSlice,
    order: OrderSlice,
    invoice: InvoiceSlice,
    authentication: AuthSlice,
  },
});

export default store;
