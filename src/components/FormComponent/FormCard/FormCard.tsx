import React, { Component } from 'react';
import { FormInput } from '../../../core/models/models';

interface FormCardProps {
  card: FormInput;
}

class FormCard extends Component<FormCardProps> {
  render() {
    const { title, date, country, pack, delivery, transfer, pay, profilePicture } = this.props.card;
    return (
      <div className="form-card">
        <div className="form-card__container">
          <h3 className="form-card__title">Name: {title}</h3>
          <div className="form-card__date">Date: {date}</div>
          <div className="form-card__country">Country: {country}</div>
          <div className="form-card__options">
            Options:
            {pack && <span className="form-card__option"> pack</span>}
            {delivery && <span className="form-card__option"> delivery</span>}
            {transfer && <span className="form-card__option"> transfer</span>}
          </div>
          <div className="form-card__pay">Pay: {pay}</div>
          <div className="form-card__image-container">
            <img
              className="form-card__image"
              src={profilePicture}
              alt={profilePicture.slice(
                profilePicture.lastIndexOf('/') + 1,
                profilePicture.lastIndexOf('.')
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;
