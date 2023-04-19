import { render, screen } from '@testing-library/react';
import Loader from '../../components/ui/Loader';

/**
 * @vitest-environment jsdom
 */

describe('Loader component', () => {
  it('renders the loading message', () => {
    render(<Loader />);
    const loadingMessage = screen.getByText('Progressing...');
    expect(loadingMessage).toBeInTheDocument();
  });
});
