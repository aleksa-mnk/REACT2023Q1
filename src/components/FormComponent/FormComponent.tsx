import React, { LegacyRef } from 'react';
import { FormProps, FormValidState } from '../../core/models/models';

import {
  validateCountry,
  validateDate,
  validatePayment,
  validatePicture,
  validateText,
} from '../../core/utils/formValidation';

class FormComponent extends React.Component<FormProps, FormValidState> {
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  inputRefs: { [key: string]: React.RefObject<HTMLInputElement | HTMLSelectElement> } = {
    inputTitle: React.createRef(),
    inputDate: React.createRef(),
    inputCountry: React.createRef(),
    inputPackage: React.createRef(),
    inputTransfer: React.createRef(),
    inputDelivery: React.createRef(),
    inputCashPay: React.createRef(),
    inputCardPay: React.createRef(),
    inputPicture: React.createRef(),
  };

  constructor(props: FormProps) {
    super(props);
    this.state = {
      inputTitleValid: true,
      inputDateValid: true,
      inputCountryValid: true,
      inputPackageValid: true,
      inputTransferValid: true,
      inputDeliveryValid: true,
      inputPayValid: true,
      inputPictureValid: true,
      inputPictureUrl: '',
      formValid: false,
    };
  }

  clearFormInputs() {
    Object.keys(this.inputRefs).forEach((key) => {
      const inputRef = this.inputRefs[key];
      if (inputRef.current) {
        const input = inputRef.current as HTMLInputElement | HTMLSelectElement;
        if (input instanceof HTMLInputElement && input.type === 'checkbox') {
          input.checked = false;
        } else {
          input.value = '';
        }
      }
    });
  }

  checkFormFields() {
    const {
      inputTitle,
      inputDate,
      inputCountry,
      inputPackage,
      inputDelivery,
      inputTransfer,
      inputCashPay,
      inputCardPay,
      inputPicture,
    } = this.inputRefs;

    const titleValid = validateText(inputTitle?.current?.value || '');
    const dateValid = validateDate(inputDate?.current?.value || '');
    const countryValid = validateCountry(inputCountry?.current?.value || '');
    const packageValid = !!(inputPackage.current as HTMLInputElement | null)?.checked;
    const deliveryValid = !!(inputDelivery.current as HTMLInputElement | null)?.checked;
    const transferValid = !!(inputTransfer?.current as HTMLInputElement | null)?.checked;
    const payValid = validatePayment(
      inputCashPay as React.RefObject<HTMLInputElement>,
      inputCardPay as React.RefObject<HTMLInputElement>
    );
    const pictureValid = validatePicture(inputPicture?.current?.value || '');

    this.setState({
      inputTitleValid: titleValid,
      inputDateValid: dateValid,
      inputCountryValid: countryValid,
      inputPackageValid: packageValid,
      inputDeliveryValid: deliveryValid,
      inputTransferValid: transferValid,
      inputPayValid: payValid,
      inputPictureValid: pictureValid,
    });

    return titleValid && dateValid && countryValid && payValid && pictureValid;
  }

  formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!this.checkFormFields()) return;
    const {
      inputTitle,
      inputDate,
      inputCountry,
      inputPackage,
      inputDelivery,
      inputTransfer,
      inputCashPay,
      inputCardPay,
      inputPicture,
    } = this.inputRefs;

    const file = (inputPicture.current as HTMLInputElement | null)?.files?.[0];
    const profilePicture = file ? URL.createObjectURL(file) : '';

    const newCard = {
      id: Date.now(),
      title: inputTitle.current?.value ?? '',
      date: inputDate.current?.value ?? '',
      country: inputCountry.current?.value ?? '',
      pack: !!(inputPackage.current as HTMLInputElement | null)?.checked,
      delivery: !!(inputDelivery.current as HTMLInputElement | null)?.checked,
      transfer: !!(inputTransfer?.current as HTMLInputElement | null)?.checked,
      pay:
        ((inputCashPay.current as HTMLInputElement)?.checked && inputCashPay.current?.value) ||
        ((inputCardPay.current as HTMLInputElement)?.checked && inputCardPay.current?.value) ||
        '',
      profilePicture: profilePicture,
    };

    this.props.addCard(newCard);
    this.clearFormInputs();
  };

  render() {
    const {
      inputTitleValid,
      inputDateValid,
      inputCountryValid,
      inputPayValid,
      inputPictureValid,
      formValid,
    } = this.state;

    const {
      inputTitle,
      inputDate,
      inputCountry,
      inputPackage,
      inputTransfer,
      inputDelivery,
      inputCashPay,
      inputCardPay,
      inputPicture,
    } = this.inputRefs;

    return (
      <form className="form" onSubmit={this.formSubmit} ref={this.formRef}>
        <div className="form__title form-block">
          <label className="form__title--label form-label" htmlFor="form__title-input">
            Title:
          </label>
          <input
            className="form__title--input form-input"
            type="text"
            id="form__title-input"
            ref={inputTitle as LegacyRef<HTMLInputElement>}
            placeholder="title"
            autoComplete="off"
          />
          {!inputTitleValid && (
            <span className="form__title--span error-span">
              Text must be at least 4 characters long
            </span>
          )}
        </div>
        <div className="form__date form-block">
          <label className="form__date--label form-label" htmlFor="form__date">
            Date:
          </label>
          <input
            className="form__date--input form-input"
            type="date"
            id="form__date"
            ref={inputDate as LegacyRef<HTMLInputElement>}
            placeholder="date"
            autoComplete="off"
          />
          {!inputDateValid && (
            <span className="form__date--span error-span">Date must be in the past.</span>
          )}
        </div>
        <div className="form__country form-block">
          <label className="form__country--label form-label" htmlFor="form__country">
            Country:
          </label>
          <select
            className="form__country--select form-select"
            id="form__country"
            ref={inputCountry as LegacyRef<HTMLSelectElement>}
            defaultValue=""
          >
            <option className="form__country--option" disabled>
              {}
            </option>
            <option className="form__country--option" value="USA">
              USA
            </option>
            <option className="form__country--option" value="Canada">
              Canada
            </option>
            <option className="form__country--option" value="Mexico">
              Mexico
            </option>
            <option className="form__country--option" value="Germany">
              Germany
            </option>
          </select>
          {!inputCountryValid && (
            <span className="form__country--span error-span">Please select a country.</span>
          )}
        </div>
        <div className="form__additional form-block">
          Additional options:
          <label className="form__additional--label form-label" htmlFor="form__package">
            Package:
          </label>
          <input
            className="form__additional--input form-input"
            type="checkbox"
            id="form__package"
            ref={inputPackage as LegacyRef<HTMLInputElement>}
          />
          <label className="form__additional form-label" htmlFor="form__delivery">
            Delivery:
          </label>
          <input
            className="form__additional--input form-input"
            type="checkbox"
            id="form__delivery"
            ref={inputDelivery as LegacyRef<HTMLInputElement>}
          />
          <label className="form__additional form-label" htmlFor="form__transfer">
            Transfer:
          </label>
          <input
            className="form__additional--input form-input"
            type="checkbox"
            id="form__transfer"
            ref={inputTransfer as LegacyRef<HTMLInputElement>}
          />
        </div>
        <div className="form__payment form-block">
          <label className="form__payment--label form-label" htmlFor="form__cash-pay">
            Cash:
          </label>
          <input
            className="form__payment--input form-input"
            type="radio"
            id="form__cash-pay"
            value="cash"
            name="pay"
            ref={inputCashPay as LegacyRef<HTMLInputElement>}
          />
          <label className="form__payment--label form-label" htmlFor="form__card-pay">
            Card:
          </label>
          <input
            className="form__payment--input form-input"
            type="radio"
            id="form__card-pay"
            value="card"
            name="pay"
            ref={inputCardPay as LegacyRef<HTMLInputElement>}
          />
          {!inputPayValid && (
            <span className="form__payment--span error-span">Please select a payment option.</span>
          )}
        </div>
        <div className="form__picture form-block">
          <label htmlFor="form__card-picture">Profile picture:</label>
          <input
            id="form__card-picture"
            className="form__picture--input form-input"
            type="file"
            ref={inputPicture as LegacyRef<HTMLInputElement>}
          />
          {!inputPictureValid && (
            <span className="form__picture--span error-span">Please upload a picture.</span>
          )}
        </div>
        <button className="form__button" data-testid="add-card" type="submit" name="Submit">
          Add new card
        </button>
        {formValid && <span className="form__submit--span message-span">Data has been saved</span>}
      </form>
    );
  }
}

export default FormComponent;
