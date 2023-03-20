import React from 'react';
import Card from './Card';
import filterCards from '../../core/utils/CardFilter';
import { cards } from '../../core/config/data';
class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCards: cards,
    };
  }
  componentDidMount() {
    this.filterCards();
  }
  componentDidUpdate(prevProps) {
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
    return React.createElement(
      'div',
      { className: 'card-list', 'data-testid': 'card-list' },
      filteredCards.length
        ? filteredCards.map((card) => React.createElement(Card, { key: card.title, ...card }))
        : React.createElement('p', null, 'No cards found')
    );
  }
}
export default CardList;
