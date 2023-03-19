import React from 'react';
import CardProps from '../../core/types/interfaces';

class Card extends React.Component<CardProps> {
  render() {
    const { title, legs, imageUrl, score, want, area } = this.props;

    return (
      <div className="card" data-testid="card">
        <img className="card__image" src={imageUrl} alt={title} />
        <div className="card__overlay">
          <h2 className="card__title">{title}</h2>
          <div className="card__description">
            <p>{legs}</p>
            <p>{score}</p>
            <p>{want}</p>
            <p>{area}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
