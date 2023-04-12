import { fireEvent, render } from '@testing-library/react';
import { ICard } from '../../components/CardItem/CardItem';
import CardList from '../../components/CardList/CardList';
import { vi } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('CardList', () => {
  it('renders without errors', () => {
    const cards: ICard[] = [];
    const onCardClick = vi.fn();
    const { container } = render(<CardList cards={cards} onCardClick={onCardClick} />);
    expect(container).toBeInTheDocument();
  });
});

describe('CardList', () => {
  it('calls the onCardClick function when a card is clicked', () => {
    const cards = [
      { id: '1', title: 'Card 1', imageUrl: '', slug: '', rating: '', source: '' },
      { id: '2', title: 'Card 2', imageUrl: '', slug: '', rating: '', source: '' },
      { id: '3', title: 'Card 3', imageUrl: '', slug: '', rating: '', source: '' },
    ];
    const onCardClick = vi.fn();
    const { getAllByTestId } = render(<CardList cards={cards} onCardClick={onCardClick} />);
    const cardElements = getAllByTestId('card-item');
    fireEvent.click(cardElements[1]);
    expect(onCardClick).toHaveBeenCalledWith(cards[1]);
  });
});
