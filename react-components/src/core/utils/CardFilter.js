import { cards } from '../config/data';
function filterCards(searchString) {
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
