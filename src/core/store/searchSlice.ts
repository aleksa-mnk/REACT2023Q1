import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const getSearchValue = (state: RootState) => state.search.value;
export const { setValue } = searchSlice.actions;

export default searchSlice.reducer;
