import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const { clearItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;