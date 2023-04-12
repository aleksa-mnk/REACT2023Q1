import { render, screen } from '@testing-library/react';
import FormPage from '../../pages/FormPage';
import { describe, expect, it } from 'vitest';

/**
 * @vitest-environment jsdom
 */
describe('Test FormPage component', () => {
  it('renders with correct text', () => {
    render(<FormPage />);
    expect(screen.getByText('Snack Name')).toBeInTheDocument();
  });
});
