import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/AboutPage';
import { describe, expect, it } from 'vitest';

/**
 * @vitest-environment jsdom
 */
describe('Test AboutPage component', () => {
  it('renders with correct text', () => {
    render(<AboutPage />);
    expect(screen.getByText('Cicada')).toBeInTheDocument();
  });
});
