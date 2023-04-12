import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from '../../components/CardItem/CardItem';

const fakeCard = {
  id: 'test-id',
  title: 'test-title',
  imageUrl: 'test-img',
  slug: 'test-slug',
  rating: 'test-rating',
  source: 'test-source',
};

/**
 * @vitest-environment jsdom
 */

describe('Card item test', () => {
  it('Render item list', async () => {
    render(<CardItem card={fakeCard} onCardClick={() => {}} />);

    expect(screen.getByText(fakeCard.title)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
