import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);
      
      if (index >= 0) {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        existingItem.quantity++;
        existingItem.totalItemPrice += existingItem.price;
      }
      else {
        state.items = [...state.items, action.payload]
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

      let newBasket = [...state.items];

      if (index >= 0) {
        const existingItem = state.items.find(item => item.id === action.payload.id);

        if (existingItem.quantity === 1) {
          newBasket.splice(index, 1);
        } else {
          existingItem.quantity--;
          existingItem.totalItemPrice -= existingItem.price;
        }
      } else {
        console.warn(`Unable to remove ${action.payload.id} as not in basket`);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export const selectTotalPrice = (state) =>
  state.basket.items.reduce((total, item) => total + item.totalItemPrice, 0);

export const selectTotalQuantity = (state) => 
  state.basket.items.reduce((total, item) => total + item.quantity, 0);

export default basketSlice.reducer;
