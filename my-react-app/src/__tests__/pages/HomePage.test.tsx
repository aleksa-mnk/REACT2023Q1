import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/HomePage';
import { describe, expect, it } from 'vitest';
import React from 'react';
/**
 * @vitest-environment jsdom
 */

describe('Test HomePage component', () => {
  it('renders with correct text', () => {
    render(<HomePage />);
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });
});
