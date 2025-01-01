import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productIds: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.productIds.includes(action.payload)) return;
            const productId = action.payload;
            if(state.productIds.length > 0){

                state.productIds.push(productId);
            }else{
                state.productIds = [productId];
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
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
