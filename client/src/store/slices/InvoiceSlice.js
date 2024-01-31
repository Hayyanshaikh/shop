// InvoiceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [],
};

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    invoiceData: (state, action) => {
      const { invoiceNumber, billTo, products, total, paymentMethod, cardNumber, expirationDate, cvv, shippingAmount } = action.payload;

      const newInvoice = {
        invoiceNumber: invoiceNumber,
        billTo: billTo,
        products: products,
        total: total,
        paymentMethod: paymentMethod,
        shippingAmount: shippingAmount,
        cardNumber: cardNumber,
        expirationDate: expirationDate,
        cvv: cvv
      }

      state.invoices.push(newInvoice)
    },
  },
});

export const { invoiceData } = invoiceSlice.actions;

export default invoiceSlice.reducer;
