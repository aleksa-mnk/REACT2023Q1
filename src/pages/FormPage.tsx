import React, { Component } from 'react';
import FormCardList from '../components/FormCardList/FormCardList';
import Form from '../components/Form/Form';
import { NewCardComponentProps, State } from '../core/types/types';

class FormPage extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cardsData: [],
    };
  }

  addCard = (cardData: NewCardComponentProps): void => {
    this.setState({ cardsData: [...this.state.cardsData, cardData] });
  };

  render() {
    const { cardsData } = this.state;
    const hasCard = cardsData.length > 0;

    return (
      <>
        <div className="container form">
          <div className="form__img">
            Form for adding
            <br />
            new characters
          </div>
          <div className="form__data">
            <Form addCard={this.addCard} />

            {hasCard && <FormCardList cardsData={cardsData} />}
          </div>
        </div>
      </>
    );
  }
}

export default FormPage;
