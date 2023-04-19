import { describe, it, expect } from 'vitest';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * @vitest-environment jsdom
 */

describe('searchSlice', () => {
  const initialState = { value: '' };

  it('should set search value correctly', () => {
    const searchSlice = createSlice({
      name: 'search',
      initialState,
      reducers: {
        setValue: (state, action: PayloadAction<string>) => {
          state.value = action.payload;
        },
      },
    });

    const { reducer, actions } = searchSlice;
    const newState = reducer(initialState, actions.setValue('test search value'));
    expect(newState.value).toEqual('test search value');
  });
});
