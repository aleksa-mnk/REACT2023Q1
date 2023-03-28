import React, { Component } from 'react';
import { DateFieldProps } from '../../../core/types/types';

class DateInput extends Component<DateFieldProps> {
  constructor(props: DateFieldProps) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { dateInputRef, onChangeHandler } = this.props;
    const date = dateInputRef.current?.value ?? '';
    onChangeHandler(event, date, 'date');
  }

  render() {
    const { dateInputRef, errors } = this.props;

    return (
      <>
        <label className="form__label" htmlFor="date">
          BIRTHDAY:
        </label>
        <input
          className="form__input form__input--date"
          type="date"
          name="date"
          id="date"
          ref={dateInputRef}
          onChange={this.handleOnChange}
        />
        {errors.date && <span className="form__error-text">{errors.date}</span>}
      </>
    );
  }
}

export default DateInput;
