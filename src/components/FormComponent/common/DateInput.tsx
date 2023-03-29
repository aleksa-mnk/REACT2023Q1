import React, { LegacyRef } from 'react';

type FormDateProps = {
  inputDateRef: LegacyRef<HTMLInputElement>;
  inputDateValid: boolean;
};

const DateInput = ({ inputDateRef, inputDateValid }: FormDateProps) => {
  return (
    <div className="form__date form-block">
      <label className="form__date--label form-label" htmlFor="form__date">
        Date:
      </label>
      <input
        className="form__date--input form-input"
        type="date"
        id="form__date"
        ref={inputDateRef}
        placeholder="date"
        autoComplete="off"
      />
      {!inputDateValid && (
        <span className="form__date--span error-span">Date must be in the past.</span>
      )}
    </div>
  );
};

export default DateInput;
