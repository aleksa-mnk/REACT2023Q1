import CardItem, {ICard} from "../CardItem/CardItem";

interface CardListProps {
    cards: ICard[];
    onCardClick: (card: ICard) => void;
}

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
