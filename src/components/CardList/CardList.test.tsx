import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../core/config/data', () => ({
  cards: [
    {
      title: 'Test Card 1',
      legs: 4,
      want: 'Some Want 1',
      score: 'Some Score 1',
      area: 'Some Area 1',
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      title: 'Test Card 2',
      legs: 2,
      want: 'Some Want 2',
      score: 'Some Score 2',
      area: 'Some Area 2',
      imageUrl: 'https://example.com/image2.jpg',
    },
  ],
}));

describe('CardList', () => {
  it('renders all cards', () => {
    const { getByTestId } = render(<CardList searchString="" />);
    const cardList = getByTestId('card-list');
    expect(cardList.childElementCount).toBe(2);
  });

  it('filters cards based on search string', () => {
    const { getByTestId } = render(<CardList searchString="Test Card 1" />);
    const cardList = getByTestId('card-list');
    expect(cardList.childElementCount).toBe(1);
  });

  it('renders a div with class "card-list" and data-testid "card-list"', () => {
    const { getByTestId } = render(<CardList searchString="" />);
    const cardList = getByTestId('card-list');
    expect(cardList.tagName).toBe('DIV');
    expect(cardList).toHaveClass('card-list');
  });

  it('displays a message when no cards are found', () => {
    const searchString = 'Some non-existent card';
    const { getByText } = render(<CardList searchString={searchString} />);
    const message = getByText('No cards found');
    expect(message).toBeInTheDocument();
  });

  it('displays a message when no cards are present in the list', () => {
    const searchString = 'Some non-existent card';
    const { queryByText } = render(<CardList searchString={searchString} />);
    const message = queryByText(/No cards found/i);
    expect(message).toBeInTheDocument();
  });
});
