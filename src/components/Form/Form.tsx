import { PureComponent, createRef } from 'react';
import TextInput from '../Form/common/TextInput';
import CheckboxInput from '../Form/common/CheckboxInput';
import Dropdown from '../Form/common/Dropdown';
import { FormComponent, NewCardComponentProps } from '../../core/types/types';
import DateInput from '../Form/common/DateInput';
import FileUpload from '../Form/common/FileUpload';
import Switcher from '../Form/common/Switcher';
import { getFormDefaultState } from '../../core/utils/form';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { helperForErrors } from './helper';

class Form extends PureComponent<FormComponent, unknown> {
  state = getFormDefaultState();
  nameInputRef = createRef<HTMLInputElement>();
  dateInputRef = createRef<HTMLInputElement>();
  fileInputRef = createRef<HTMLInputElement>();
  countryInputRef = createRef<HTMLSelectElement>();
  acceptedInputRef = createRef<HTMLInputElement>();
  maleInputRef = createRef<HTMLInputElement>();
  femaleInputRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  resetError = (name: string) => {
    this.setState((state: { errors: string }) => {
      const errors = Object.assign({}, state.errors, { [name]: null });
      return { ...state, errors };
    });
  };

  updateFormField = (name: string, value: string | boolean | undefined) => {
    this.resetError(name);
    this.setState((state: { currentCard: NewCardComponentProps }) => {
      const currentCard = Object.assign({}, state.currentCard, { [name]: value });
      return { ...state, currentCard };
    });
    this.setState((state: { errors: { [s: string]: unknown } | ArrayLike<unknown> }) => {
      const hasError = Object.values(state.errors).some((errorText) => errorText != null);
      if (!hasError) {
        return Object.assign({}, state, { isDisabled: false });
      }
      return state;
    });
  };

  onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    value: string | boolean | undefined,
    param: string
  ) => {
    if (param !== 'accepted') {
      evt.preventDefault();
    }
    this.updateFormField(param, value);
  };

  onRoleChange = () => {
    const maleInput = this.maleInputRef.current as HTMLInputElement;
    const femaleInput = this.femaleInputRef.current as HTMLInputElement;
    const isMale = maleInput.checked ? 'male' : '';
    const isFemale = femaleInput.checked ? 'female' : '';
    const value: string = isMale && isFemale ? 'non-binary' : isMale + isFemale;
    this.updateFormField('male', maleInput.checked);
    this.updateFormField('female', femaleInput.checked);
    this.updateFormField('roles', value);
  };

  resetForm = () => {
    (this.formRef.current as HTMLFormElement).reset();
  };

  onSubmit = () => {
    const { addCard } = this.props;

    Object.entries(this.state.currentCard).forEach(([name, value]) => {
      const result = helperForErrors(name, value);
      Object.assign(this.state.errors, { [name]: result });
      this.setState((state: { errors: string }) => {
        const errors = Object.assign({}, state.errors, { [name]: result });
        return { ...state, errors };
      });
    });

    this.setState((state: { errors: { [propName: string]: unknown } | ArrayLike<unknown> }) => {
      const hasError = Object.values(state.errors).some((errorText) => errorText);
      return { ...state, hasError };
    });

    this.setState((state: { hasError: string; currentCard: NewCardComponentProps }) => {
      if (!state.hasError) {
        const newCard = { ...state.currentCard };
        newCard.id = uuidv4();
        addCard(newCard);
        this.resetForm();
        return getFormDefaultState();
      }
      return state;
    });
  };

  render() {
    const { errors, isDisabled } = this.state;

    return (
      <form
        className="form-container"
        ref={this.formRef}
        onSubmit={(evt) => {
          evt.preventDefault();
          this.onSubmit();
        }}
      >
        <ul className="form__list">
          <li className="form__item">
            <TextInput
              nameInputRef={this.nameInputRef}
              onChangeHandler={this.onChangeHandler}
              errors={errors}
            />
          </li>

          <li className="form__item">
            <DateInput
              dateInputRef={this.dateInputRef}
              onChangeHandler={this.onChangeHandler}
              errors={errors}
            />
          </li>

          <li className="form__item">
            <Dropdown
              catInputRef={this.countryInputRef}
              onChangeHandler={this.onChangeHandler}
              errors={errors}
            />
          </li>

          <li className="form__item">
            <CheckboxInput
              maleInputRef={this.maleInputRef}
              femaleInputRef={this.femaleInputRef}
              errors={errors}
              onRoleChange={this.onRoleChange}
              maleChecked={this.state.currentCard.male}
              femaleChecked={this.state.currentCard.female}
            />
          </li>

          <li className="form__item">
            <FileUpload
              label="Давай картинку"
              fileInputRef={this.fileInputRef}
              errors={errors}
              onChangeHandler={this.onChangeHandler}
            />
          </li>

          <li className="form__item">
            <Switcher
              acceptedInputRef={this.acceptedInputRef}
              onChangeHandler={this.onChangeHandler}
              errors={errors}
              checked={this.state.currentCard.accepted}
            />
          </li>

          <li className="form__item">
            <button className="form__submit" type="submit" disabled={isDisabled}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default Form;
