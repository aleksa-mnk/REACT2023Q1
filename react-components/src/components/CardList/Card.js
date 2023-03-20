import React from 'react';
class Card extends React.Component {
  render() {
    const { title, legs, imageUrl, score, want, area } = this.props;
    return React.createElement(
      'div',
      { className: 'card', 'data-testid': 'card' },
      React.createElement('img', { className: 'card__image', src: imageUrl, alt: title }),
      React.createElement(
        'div',
        { className: 'card__overlay' },
        React.createElement('h2', { className: 'card__title' }, title),
        React.createElement(
          'div',
          { className: 'card__description' },
          React.createElement('p', null, legs),
          React.createElement('p', null, score),
          React.createElement('p', null, want),
          React.createElement('p', null, area)
        )
      )
    );
  }
}
export default Card;
