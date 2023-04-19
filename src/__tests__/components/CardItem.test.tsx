import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from '../../components/CardList/CardItem';

const fakeCard = {
  type: 'gif',
  id: '123',
  url: 'https://example.com/123',
  slug: 'example-gif',
  source: '',
  title: 'Example gif',
  rating: 'g',
  images: {
    fixed_height: {
      url: 'https://example.com/123.gif',
    },
  },
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
