// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/Cart/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
