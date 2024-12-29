import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productIds: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productId = action.payload;
            if (!state.productIds.includes(productId)) {
                state.productIds.push(productId);
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.productIds = state.productIds.filter(id => id !== productId);
        },
        clearCart: (state) => {
            state.productIds = [];
        }
    }
});

// Selectors
export const selectCartNo = (state) => state.cart.productIds.length + 1;

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
