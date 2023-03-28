import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateInput from './DateInput';
import '@testing-library/jest-dom';

describe('DateInput component', () => {
  const onChangeHandler = jest.fn();
  const dateInputRef = React.createRef<HTMLInputElement>();

  beforeEach(() => {
    onChangeHandler.mockClear();
  });

  it('renders the input field', () => {
    const { getByLabelText } = render(
      <DateInput
        dateInputRef={dateInputRef}
        errors={{
          name: 'name is not written or so short',
          date: 'date not selected',
          cat: 'cat not selected',
          imgSrc: 'image is not selected',
          roles: 'at least 1 must be selected',
          accepted: 'should be accepted',
        }}
        onChangeHandler={onChangeHandler}
      />
    );
    const input = getByLabelText('BIRTHDAY:') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('date');
  });

  it('calls the onChangeHandler function when the date value changes', () => {
    const { getByLabelText } = render(
      <DateInput
        dateInputRef={dateInputRef}
        errors={{
          name: 'name is not written or so short',
          date: 'date not selected',
          cat: 'cat not selected',
          imgSrc: 'image is not selected',
          roles: 'at least 1 must be selected',
          accepted: 'should be accepted',
        }}
        onChangeHandler={onChangeHandler}
      />
    );
    const input = getByLabelText('BIRTHDAY:') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '2022-03-01' } });
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
    expect(onChangeHandler).toHaveBeenCalledWith(expect.anything(), '2022-03-01', 'date');
  });

  it('displays the error message when errors.date is truthy', () => {
    const { getByText } = render(
      <DateInput
        dateInputRef={dateInputRef}
        errors={{
          name: 'name is not written or so short',
          date: 'date not selected',
          cat: 'cat not selected',
          imgSrc: 'image is not selected',
          roles: 'at least 1 must be selected',
          accepted: 'should be accepted',
        }}
        onChangeHandler={onChangeHandler}
      />
    );
    const errorText = getByText('date not selected');
    expect(errorText).toBeInTheDocument();
  });
});
