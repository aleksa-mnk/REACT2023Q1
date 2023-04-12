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
    <div className="card-item" onClick={() => onCardClick(card)}>
      <div className="card-item__image-container">
        <img src={card.imageUrl} alt={card.title} />
      </div>
      <div className="card-item__content">
        <h3 className="card-item__title">{card.title}</h3>
        <p className="card-item__rating">Rating: {card.rating}</p>
      </div>
    </div>
  );
};

export default Card;
