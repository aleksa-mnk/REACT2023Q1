import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { vi } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('SearchBar component', () => {
  const mockOnChange = vi.fn();
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render a search input and a search button', () => {
    render(<SearchBar value="" onChange={mockOnChange} onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Search');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onChange function when the input value is changed', () => {
    render(<SearchBar value="" onChange={mockOnChange} onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'react testing' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit function when the search button is clicked', () => {
    render(<SearchBar value="" onChange={mockOnChange} onSubmit={mockOnSubmit} />);
    const buttonElement = screen.getByText('Search');
    fireEvent.click(buttonElement);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit function when the Enter key is pressed', () => {
    render(<SearchBar value="" onChange={mockOnChange} onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
