import { configureStore } from '@reduxjs/toolkit';
import { giphyApi } from './giphyApi';
import searchSlice from './searchSlice';
import { useDispatch } from 'react-redux';
import formSlice from './formSlice';

const store = configureStore({
  reducer: {
    search: searchSlice,
    form: formSlice,
    [giphyApi.reducerPath]: giphyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(giphyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
