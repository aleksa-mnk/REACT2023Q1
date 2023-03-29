import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormPage from './FormPage';

test('renders FormPage component', () => {
  render(<FormPage />);
  const pageTitle = screen.getByText('Form Page');
  expect(pageTitle).toBeInTheDocument();
});

test('adds a new card to the list', () => {
  render(<FormPage />);
  const cardTitle = 'My Card Title';
  const addCardBtn = screen.getByText('Add new card');
  fireEvent.click(addCardBtn);
  const titleInput = screen.getByLabelText('Title:');
  const dateInput = screen.getByLabelText('Date:');
  const countryInput = screen.getByLabelText('Country:');
  const transferInput = screen.getByLabelText('Transfer:');
  const deliveryInput = screen.getByLabelText('Delivery:');
  const payInput = screen.getByLabelText('Card:');
  fireEvent.change(titleInput, { target: { value: cardTitle } });
  fireEvent.change(dateInput, { target: { value: '2023-03-29' } });
  fireEvent.change(countryInput, { target: { value: 'USA' } });
  fireEvent.click(transferInput);
  fireEvent.click(deliveryInput);
  fireEvent.change(payInput, { target: { value: 'credit card' } });
  const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
  const fileInput = screen.getByLabelText('Profile picture:') as HTMLInputElement;
  const fileList = {
    0: file,
    length: 1,
    item: (index: number) => file,
  } as unknown as FileList;

  Object.defineProperty(fileInput, 'files', {
    value: fileList,
  });

  fireEvent.change(fileInput);
  const submitBtn = screen.getByText('Add new card');
  fireEvent.click(submitBtn);
  const card = screen.getByText('Add new card');
  expect(card).toBeInTheDocument();
});

test('should remove card on remove button click', () => {
  const { getByTestId } = render(<FormPage />);
  const removeButton = getByTestId('add-card');

  fireEvent.click(removeButton);

  expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  expect(screen.queryByText('2023-03-29')).not.toBeInTheDocument();
  expect(screen.queryByText('Test Country')).not.toBeInTheDocument();
  expect(screen.queryByText('Test Pay')).not.toBeInTheDocument();
});
