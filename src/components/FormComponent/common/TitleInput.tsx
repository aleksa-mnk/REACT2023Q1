import React, { LegacyRef } from 'react';

type FormTitleProps = {
  inputTitleRef: LegacyRef<HTMLInputElement>;
  inputTitleValid: boolean;
};

const TitleInput = ({ inputTitleRef, inputTitleValid }: FormTitleProps) => {
  return (
    <div className="form__title form-block">
      <label className="form__title--label form-label" htmlFor="form__title-input">
        Title:
      </label>
      <input
        className="form__title--input form-input"
        type="text"
        id="form__title-input"
        ref={inputTitleRef}
        placeholder="title"
        autoComplete="off"
      />
      {!inputTitleValid && (
        <span className="form__title--span error-span">
          Text must be at least 4 characters long
        </span>
      )}
    </div>
  );
};

export default TitleInput;
