import CardItem from './CardItem';
import { CardListProps } from '../../core/types';

const CardList = ({ cards, onCardClick }: CardListProps) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardList;
