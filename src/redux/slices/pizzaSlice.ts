import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export type FetchPizzasArgs = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: number;
}


type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  rating: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus',  async (params: FetchPizzasArgs) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios
      .get<Pizza[]>(
        `https://633089a9f5fda801f8e26915.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
    return data as Pizza[];
  }
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }
});

export const selectPizza = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;