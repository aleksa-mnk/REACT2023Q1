import { CardProps } from '../../core/types';

const Card = ({ card, onCardClick }: CardProps) => {
  return (
    <div className="card-item" onClick={() => onCardClick(card)} data-testid="card-item">
      <div className="card-item__image-container">
        <img src={card.imageUrl} alt={card.title} />
      </div>
      <div className="card-item__content">
        <h3 className="card-item__title">{card.title}</h3>
      </div>
    </div>
  );
};

export default Card;
