import { createSlice } from "@reduxjs/toolkit";
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("productIds");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error("Error loading productIds from localStorage:", error);
    return [];
  }
};


const saveToLocalStorage = (productIds) => {
  try {
    localStorage.setItem("productIds", JSON.stringify(productIds));
  } catch (error) {
    console.error("Error saving productIds to localStorage:", error);
  }
};

const initialState = {
  productIds: loadFromLocalStorage(), 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      if (!state.productIds.includes(productId)) {
        state.productIds.push(productId);
        saveToLocalStorage(state.productIds); 
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.productIds = state.productIds.filter((id) => id !== productId);
      saveToLocalStorage(state.productIds);
    },
    clearCart: (state) => {
      state.productIds = [];
      saveToLocalStorage(state.productIds);
    },
    loadCartFromStorage: (state) => {
      state.productIds = loadFromLocalStorage();
    },
  },
});

export const { addToCart, removeFromCart, clearCart, loadCartFromStorage } =
  cartSlice.actions;

export default cartSlice.reducer;
