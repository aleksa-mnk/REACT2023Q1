export interface ICard {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
  rating: string;
  source: string;
}

interface CardProps {
  card: ICard;
  onCardClick: (card: ICard) => void;
}

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
