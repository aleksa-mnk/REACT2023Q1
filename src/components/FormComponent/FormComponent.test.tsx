import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormComponent from './FormComponent';

test('form fields validation', () => {
  const {getByLabelText, getByRole, queryByText} = render(<FormComponent addCard={jest.fn()} />);
  const titleInput = getByLabelText('Title:');
  const dateInput = getByLabelText('Date:');
  const countryInput = getByLabelText('Country:');
  const cashPayInput = getByLabelText('Cash:');
  const cardPayInput = getByLabelText('Card:');
  const pictureInput = getByLabelText('Profile picture:');
  const submitButton = getByRole('button', {name: 'Add new card'});

  fireEvent.change(titleInput, {target: {value: ''}});
  fireEvent.change(dateInput, {target: {value: '2022-13-45'}});
  fireEvent.change(countryInput, {target: {value: 'unknown'}});
  fireEvent.click(cashPayInput);
  fireEvent.click(submitButton);

  expect(queryByText('Text must be at least 4 characters long')).toBeInTheDocument();
  expect(queryByText('Date must be in the past.')).toBeInTheDocument();
  expect(queryByText('Please select a country.')).toBeInTheDocument();
});