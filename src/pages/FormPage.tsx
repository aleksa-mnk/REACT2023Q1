import React, { Component } from 'react';
import FormCard from '../components/FormComponent/FormCard/FormCard';
import FormComponent from '../components/FormComponent/FormComponent';
import { FormInput } from '../core/models/models';

interface FormPageState {
  cards: FormInput[];
}

class FormPage extends Component<unknown, FormPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cards: [],
    };
    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard(newCard: FormInput): void {
    this.setState((prevState: Readonly<FormPageState>) => ({
      cards: [...prevState.cards, newCard],
    }));
  }

  render() {
    const { cards } = this.state;
    return (
      <div data-testid="test-form" className="form-page">
        <h1 className="page-header">Form Page</h1>
        <div className="form-container">
          <FormComponent addCard={this.addNewCard} />
        </div>
        <div className="card-container">
          {cards.map((card) => (
            <FormCard data-testid="test-form" key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormPage;
