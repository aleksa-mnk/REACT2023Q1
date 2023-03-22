import React from 'react';
import Card from './Card';
import filterCards from '../../core/utils/CardFilter';
import { cards } from '../../core/config/data';

interface CardData {
  title: string;
  legs: number;
  want: string;
  score: string;
  area: string;
  imageUrl: string;
}

interface Props {
  searchString: string;
}

interface State {
  filteredCards: CardData[];
}

class CardList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      filteredCards: cards,
    };
  }

  componentDidMount() {
    this.filterCards();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.searchString !== this.props.searchString) {
      this.filterCards();
    }
  }

  filterCards = () => {
    const filteredCards = filterCards(this.props.searchString);
    this.setState({ filteredCards });
  };

  render() {
    const { filteredCards } = this.state;

    return (
      <div className="card-list" data-testid="card-list">
        {filteredCards.length ? (
          filteredCards.map((card) => <Card key={card.title} {...card} />)
        ) : (
          <p>No cards found</p>
        )}
      </div>
    );
  }
}

export default CardList;
