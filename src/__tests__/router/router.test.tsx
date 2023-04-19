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
      <MemoryRouter initialEntries={['/about']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByText('Cicada')).toBeInTheDocument();
  });

  it('renders the NotFoundPage when a route is not found', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
