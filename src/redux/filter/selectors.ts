import { RootState } from '../store';

export const selectSortFilter = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;
