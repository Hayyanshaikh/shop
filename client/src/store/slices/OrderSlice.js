// OrderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};
export const OrderSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const { confirmProducts, customerInfo, paymentDetails, grandPrice } = action.payload;

      const newOrder = {
        products: confirmProducts,
        customerInfo: customerInfo,
        paymentDetails: paymentDetails,
        grandPrice: grandPrice,
      };

      state.orders.push(newOrder);
    },
  },
});

export const { placeOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
