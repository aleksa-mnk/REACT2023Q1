import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ISnack } from '../types';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: [],
  } as { data: ISnack[] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getData = (state: RootState) => state.form.data;
export const { setData } = formSlice.actions;
export default formSlice.reducer;
