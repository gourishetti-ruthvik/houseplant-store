import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
    cartItems: [],    // Stores items in the cart
    totalQuantity: 0, // Total number of items in cart
    totalPrice: 0,    // Total price of all items
};

// Create Redux Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add an item to the cart
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        },

        // Increase item quantity
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += item.price;
            }
        },

        // Decrease item quantity (but not below 1)
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
            }
        },

        // Remove item from cart
        removeFromCart: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.price * item.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
        },
    },
});

// Export actions
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
