import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingProduct = state.items.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalAmount += action.payload.price;
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalAmount += item.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalAmount -= item.price;
            } else if (item && item.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload);
                state.totalQuantity -= 1;
                state.totalAmount -= item.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const { addItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
