import { render, screen } from '@testing-library/react';
import Message from '../../core/utils/message';
import { describe, it, expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('NotFoundPage', () => {
  it('renders "404 Not Found" text', () => {
    render(<Message message="Hi" />);
    expect(screen.getByText('Hi')).toBeInTheDocument();
  });
});
