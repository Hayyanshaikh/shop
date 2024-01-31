// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: null,
  shippingAmount: 99.99,
};

const totalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find((product) => product.id === newProduct.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({
          ...newProduct,
          quantity: 1,
        });
      }

      state.totalPrice = totalPrice(state.products);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.id !== productId);
      state.totalPrice = totalPrice(state.products);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((product) => product.id === productId);
      if (product && product.quantity < 10) {
        product.quantity += 1;
        state.totalPrice = totalPrice(state.products);
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((product) => product.id === productId);

      if (product && product.quantity > 1) {
          product.quantity -= 1;
        state.totalPrice = totalPrice(state.products);
      }
    },
    cartEmpty: (state) => {
      state.products = [];
      state.totalPrice = null;
    },

  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartEmpty } = CartSlice.actions;

export default CartSlice.reducer;