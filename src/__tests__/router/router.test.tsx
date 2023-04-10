import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Router from '../../routes';

/**
 * @vitest-environment jsdom
 */

describe('Router', () => {
  it('renders the correct routes', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });

  it('renders the NotFoundPage when a route is not found', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
