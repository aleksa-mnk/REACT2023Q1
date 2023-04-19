import CardItem from './CardItem';
import { CardListProps } from '../../core/types';
import { GiphyResponse } from '../../core/store/giphyApi';

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="card-list">
      {Array.isArray(cards.data) &&
        cards.data.map((card: GiphyResponse) => <CardItem key={card.id} card={card} />)}
    </div>
  );
};

export default CardList;
