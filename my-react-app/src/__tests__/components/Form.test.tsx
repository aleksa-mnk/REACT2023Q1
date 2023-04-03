import { Form } from '../../components/Form/Form';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('Test Form component', () => {
  it('renders with correct text', () => {
    render(<Form />);
    expect(screen.getByText('Snack Name')).toBeInTheDocument();
  });
});
