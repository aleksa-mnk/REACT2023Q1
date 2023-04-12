import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Modal from '../../components/Modal/Modal';

/**
 * @vitest-environment jsdom
 */

describe('Modal component', () => {
  const mockCard = {
    id: '1',
    title: 'Card 1',
    imageUrl: 'https://example.com/card1.jpg',
    slug: 'card-1',
    rating: 'G',
    source: 'https://test.com',
  };

  afterEach(() => {
    document.body.style.overflow = 'auto';
  });

  it('renders null when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={() => {}} card={mockCard} />);
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  it('renders null when card is null', () => {
    render(<Modal isOpen={true} onClose={() => {}} card={null} />);
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  it('renders modal content when isOpen and card are true', () => {
    render(<Modal isOpen={true} onClose={() => {}} card={mockCard} />);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Slug: card-1')).toBeInTheDocument();
    expect(screen.getByText('Rating: G')).toBeInTheDocument();
    expect(screen.getByText('Source:')).toBeInTheDocument();
    expect(screen.getByText('https://test.com')).toBeInTheDocument();
    expect(screen.getByAltText('Card 1')).toBeInTheDocument();
  });
});
