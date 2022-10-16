import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchPizzasArgs, Pizza } from './types';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: FetchPizzasArgs) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://633089a9f5fda801f8e26915.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data as Pizza[];
  },
);
