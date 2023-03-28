import React, { Component } from 'react';
import { NameFieldsProps } from '../../../core/types/types';

class TextInput extends Component<NameFieldsProps> {
  componentDidMount() {
    const { nameInputRef } = this.props;
    nameInputRef.current?.focus();
  }

  componentDidUpdate() {
    const { nameInputRef } = this.props;
    nameInputRef.current?.focus();
  }

  render() {
    const { errors, onChangeHandler, nameInputRef } = this.props;
    return (
      <>
        <label className="form__label" htmlFor="name">
          NAME:
        </label>
        <input
          className="form__input form__input--text"
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          onChange={(event) => {
            onChangeHandler(event, nameInputRef.current?.value || '', 'name');
          }}
          ref={nameInputRef}
        />
        {errors.name && <span className="form__error-text">{errors.name}</span>}
      </>
    );
  }
}

export default TextInput;
