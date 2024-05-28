// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    details: {id:0},
    cart: []
}

// Create the slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const cartId = action.payload
      
      if(!state.cart.includes(cartId)){
        state.cart.push(cartId)
      }
    },
    
    sendId: (state, action) => {
      state.details.id = action.payload
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(id => id !== action.payload);
    }
  }
});


export const { addToCart,sendId,removeItemFromCart } = productSlice.actions;
export default productSlice.reducer;
