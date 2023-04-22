import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../core/store/store';
import { Form } from '../../components/Form/Form';

describe('Form component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the form and submit a new snack', () => {
    render(
        <Provider store={store}>
          <Form />
        </Provider>
    );

    const nameInput = screen.getByLabelText(/name/i);
    const imageInput = screen.getByLabelText(/image/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    fireEvent.change(nameInput, { target: { value: 'Test Snack' } });
    fireEvent.change(imageInput, { target: { value: 'http://example.com/image.png' } });
    fireEvent.change(descriptionInput, { target: { value: 'This is a test snack.' } });

    fireEvent.click(addButton);

    const snackName = screen.getByText(/Test Snack/i);
    expect(snackName).toBeInTheDocument();
  });
});
