import React, { LegacyRef } from 'react';

type InputFieldProps = {
  label: string;
  inputRef: LegacyRef<HTMLInputElement>;
  value: string;
  valid: boolean;
  type: string;
};

const InputField = ({ label, inputRef, value, valid, type }: InputFieldProps) => {
  const inputClassName = `form__${label.toLowerCase()}--input form-input ${
    valid ? '' : 'form-input--error'
  }`;

  return (
    <div className={`form__${label.toLowerCase()} form-block`}>
      <div className="form__label">{label}</div>
      <input
        ref={inputRef}
        className={inputClassName}
        type={type}
        value={value}
        autoComplete="off"
      />
      {!valid && (
        <span className="form__country--span error-span">
          Please enter a valid ${label.toLowerCase()}
        </span>
      )}
    </div>
  );
};

export default InputField;
