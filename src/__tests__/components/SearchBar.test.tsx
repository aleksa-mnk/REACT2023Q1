import React from 'react';
import { describe, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import SearchBar from '../../components/SearchBar/SearchBar';
import store from '../../core/store/store';

/**
 * @vitest-environment jsdom
 */

const mockReduxStore = {
  render,
  dispatch: vi.fn(),
  getState: vi.fn(),
};

describe('SearchBar component', (test) => {
  test('should render correctly', async () => {
    const { getByPlaceholderText, getByRole } = await mockReduxStore.render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('should update the input value on change', async () => {
    const { getByPlaceholderText } = await mockReduxStore.render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = getByPlaceholderText(/search/i);
    await userEvent.type(input, 'hello');

    expect(input).toHaveValue('hello');
  });
});
