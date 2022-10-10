import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload);

      if (findItem.count > 1) {
        findItem.count--;
      } else {
        if (window.confirm('Вы действительно хотите удалить пиццу?')) {
          state.items = state.items.filter(obj => obj.id !== action.payload);
        }
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const selectCart = (state) => state.cart;

export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id);

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;