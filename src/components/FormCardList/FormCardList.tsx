import React, { Component } from 'react';
import { NewCardComponentProps } from '../../core/types/types';
import FormCard from './FormCard';

interface Props {
  cardsData: NewCardComponentProps[];
}

class FormCardList extends Component<Props, unknown> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { cardsData } = this.props;

    return (
      <ul className="card-list">
        {cardsData.map((cardData) => (
          <li key={cardData.id} className="card-list__item">
            <FormCard cardData={cardData} />
          </li>
        ))}
      </ul>
    );
  }
}

export default FormCardList;
