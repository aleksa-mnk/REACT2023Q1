/**
 * @vitest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { vi } from 'vitest';
import Modal from '../../components/Modal/Modal';
import { GiphyResponse } from '../../core/store/giphyApi';

describe('Modal', () => {
  const onClose = vi.fn();
  const card: GiphyResponse = {
    type: 'gif',
    id: '123',
    url: 'https://giphy.com/123',
    slug: 'some-slug',
    source: 'https://example.com',
    title: 'Some Title',
    rating: 'g',
    images: {
      fixed_height: {
        url: 'https://media.giphy.com/media/abc/xyz.gif',
      },
    },
  };

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render nothing if isOpen is false or card is null', () => {
    render(<Modal isOpen={false} onClose={onClose} card={null} />);
    expect(screen.queryByText('Some Title')).toBeNull();

    render(<Modal isOpen={true} onClose={onClose} card={null} />);
    expect(screen.queryByText('Some Title')).toBeNull();

    render(<Modal isOpen={false} onClose={onClose} card={card} />);
    expect(screen.queryByText('Some Title')).toBeNull();
  });

  it('should render the modal when isOpen is true and card is not null', () => {
    render(<Modal isOpen={true} onClose={onClose} card={card} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Some Title')).toBeInTheDocument();
    expect(screen.getByAltText('Some Title')).toBeInTheDocument();
  });

  it('should call onClose when overlay is clicked', () => {
    render(<Modal isOpen={true} onClose={onClose} card={card} />);
    fireEvent.click(screen.getByRole('dialog'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should not call onClose when modal image is clicked', () => {
    render(<Modal isOpen={true} onClose={onClose} card={card} />);
    fireEvent.click(screen.getByAltText('Some Title'));
    expect(onClose).not.toHaveBeenCalled();
  });
});
