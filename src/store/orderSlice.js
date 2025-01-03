import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders:[]
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            const order = action.payload;
            const id = action.payload.id;
            const price = action.payload.price;
            const quantity = action.payload.quantity;

            for (let i = 0; i < state.orders.length; i++) {
                if (state.orders[i].id === id ) {
                    state.orders[i].quantity=quantity;
                    state.orders[i].price=price;
                    return;
                }
            }
            if(state.orders.length > 0){

                state.orders.push(order);
            }else{
                state.orders = [order];
            }
        },
        removeOrder: (state, action) => {
            const order = action.payload;
            state.orders = state.orders.filter((item) => item.id !== order.id);
        },
        clearOrder: (state) => {
            state.orders = [];
        }
    }
});
export const { addOrder, removeOrder, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
