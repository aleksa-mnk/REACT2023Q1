import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../pages/NotFoundPage';
import { describe, it, expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('NotFoundPage', () => {
  it('renders "404 Not Found" text', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
