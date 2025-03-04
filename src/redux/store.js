import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Import the cart slice

export const store = configureStore({
    reducer: {
        cart: cartReducer,  // Add cart slice to the store
    },
});
