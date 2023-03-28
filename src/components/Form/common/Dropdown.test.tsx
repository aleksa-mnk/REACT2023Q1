import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  const catInputRef = React.createRef<HTMLSelectElement>();

  test('renders without errors', () => {
    const { getByLabelText } = render(
      <Dropdown
        catInputRef={catInputRef}
        errors={{
          name: 'name is not written or so short',
          date: 'date not selected',
          cat: 'cat not selected',
          imgSrc: 'image is not selected',
          roles: 'at least 1 must be selected',
          accepted: 'should be accepted',
        }}
        onChangeHandler={() => {}}
      />
    );
    expect(getByLabelText('CATS:')).toBeInTheDocument();
  });

  test('displays error message when error is present', () => {
    const { getByText } = render(
      <Dropdown
        catInputRef={catInputRef}
        errors={{
          name: 'name is not written or so short',
          date: 'date not selected',
          cat: 'cat not selected',
          imgSrc: 'image is not selected',
          roles: 'at least 1 must be selected',
          accepted: 'should be accepted',
        }}
        onChangeHandler={() => {}}
      />
    );
    expect(getByText('Please select a cat')).toBeInTheDocument();
  });

  test('calls onChangeHandler function with correct arguments when option is selected', () => {
    const onChangeHandler = jest.fn();
    const { getByLabelText } = render(
      <Dropdown
        catInputRef={catInputRef}
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
    const select = getByLabelText('CATS:') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'Persian' } });
    expect(onChangeHandler).toHaveBeenCalledWith(expect.anything(), 'Persian', 'cat');
  });
});
