import React, { LegacyRef } from 'react';
import { FormProps, FormValidState } from '../../core/models/model';
import DateInput from './common/DateInput';
import {
  validateCountry,
  validateDate,
  validatePayment,
  validatePicture,
  validateText,
} from '../../core/utils/formValidation';
import TitleInput from './common/TitleInput';
import CountrySelect from './common/CountrySelect';
import AdditionalOptions from './common/AdditionalOptions';
import PaymentOptions from './common/PaymentOptions';
import PictureInput from './common/PictureInput';

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
      inputCheckboxValid: true,
    };
  }

  clearFormInputs() {
    Object.keys(this.inputRefs).forEach((key) => {
      const inputRef = this.inputRefs[key];
      if (inputRef.current) {
        const input = inputRef.current as HTMLInputElement | HTMLSelectElement;
        if (
          input instanceof HTMLInputElement &&
          (input.type === 'checkbox' || input.type === 'radio')
        ) {
          input.checked = false;
        } else {
          input.value = '';
        }
      }
    });
  }

  checkFormFields() {
    const titleValid = validateText(this.inputRefs.inputTitle?.current?.value || '');
    const dateValid = validateDate(this.inputRefs.inputDate?.current?.value || '');
    const countryValid = validateCountry(this.inputRefs.inputCountry?.current?.value || '');
    const packageValid = !!(this.inputRefs.inputPackage.current as HTMLInputElement | null)
      ?.checked;
    const deliveryValid = !!(this.inputRefs.inputDelivery.current as HTMLInputElement | null)
      ?.checked;
    const transferValid = !!(this.inputRefs.inputTransfer?.current as HTMLInputElement | null)
      ?.checked;
    const payValid = validatePayment(
      this.inputRefs.inputCashPay as React.RefObject<HTMLInputElement>,
      this.inputRefs.inputCardPay as React.RefObject<HTMLInputElement>
    );
    const checkboxValid = !(!packageValid && !deliveryValid && !transferValid);
    const pictureValid = validatePicture(this.inputRefs.inputPicture?.current?.value || '');

    this.setState({
      inputTitleValid: titleValid,
      inputDateValid: dateValid,
      inputCountryValid: countryValid,
      inputPackageValid: packageValid,
      inputDeliveryValid: deliveryValid,
      inputTransferValid: transferValid,
      inputPayValid: payValid,
      inputPictureValid: pictureValid,
      inputCheckboxValid: checkboxValid,
      formValid:
        titleValid && dateValid && countryValid && payValid && pictureValid && checkboxValid,
    });

    return titleValid && dateValid && countryValid && payValid && pictureValid && checkboxValid;
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
      inputCheckboxValid,
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
        <TitleInput
          inputTitleRef={inputTitle as LegacyRef<HTMLInputElement>}
          inputTitleValid={inputTitleValid}
        />
        <DateInput
          inputDateRef={inputDate as LegacyRef<HTMLInputElement>}
          inputDateValid={inputDateValid}
        />
        <CountrySelect
          inputCountry={inputCountry as LegacyRef<HTMLSelectElement>}
          inputCountryValid={inputCountryValid}
        />
        <AdditionalOptions
          inputPackage={inputPackage as React.RefObject<HTMLInputElement>}
          inputDelivery={inputDelivery as React.RefObject<HTMLInputElement>}
          inputTransfer={inputTransfer as React.RefObject<HTMLInputElement>}
          inputCheckboxValid={inputCheckboxValid}
        />
        <PaymentOptions
          inputCashPay={inputCashPay as LegacyRef<HTMLInputElement>}
          inputCardPay={inputCardPay as LegacyRef<HTMLInputElement>}
          inputPayValid={inputPayValid}
        />
        <PictureInput
          inputPicture={inputPicture as LegacyRef<HTMLInputElement> | undefined}
          inputPictureValid={inputPictureValid as boolean}
        />
        <button className="form__button" data-testid="add-card" type="submit" name="Submit">
          Add new card
        </button>
        {formValid && <span className="form__submit--span message-span">Data has been saved</span>}
      </form>
    );
  }
}

export default FormComponent;
