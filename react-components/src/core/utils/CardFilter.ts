import { cards } from '../config/data';

interface Card {
  title: string;
  legs: number;
  want: string;
  score: string;
  area: string;
  imageUrl: string;
}

function filterCards(searchString: string): Card[] {
  if (!searchString) {
    return cards;
  }

  const normalizedSearchString = searchString.trim().toLowerCase();

  return cards.filter((card) =>
    Object.values(card).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(normalizedSearchString)
    )
  );
}

export default filterCards;
