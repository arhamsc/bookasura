import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    subTotal: 0,
    changed: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          _id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price,
          imageUrl: newItem.imageUrl,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
      state.subTotal = state.items
        .map((item) => item.totalPrice)
        .reduce((acc, curr) => acc + curr);
    },
    removeCartItem(state, action) {
      const _id = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== _id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.subTotal = state.items
        .map((item) => item.totalPrice)
        .reduce((acc, curr) => acc + curr);
    },
    deleteCartItem(state, action) {
      const _id = action.payload;
      state.items = state.items.filter((item) => item._id !== _id);
      state.subTotal = state.items
        .map((item) => item.totalPrice)
        .reduce((acc, curr) => acc + curr);
    },
    deleteFullCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.subTotal = 0;
      state.changed = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
