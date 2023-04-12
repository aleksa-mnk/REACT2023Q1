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
        <div className="card" onClick={() => onCardClick(card)}>
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <p>Rating: {card.rating}</p>
        </div>
    );
};

export default Card;