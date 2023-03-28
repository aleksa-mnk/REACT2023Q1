import React, { forwardRef, ForwardRefRenderFunction } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  required?: boolean;
  name: string;
  options: SelectOption[];
  defaultValue?: string;
  error?: string;
}

const SelectInput: ForwardRefRenderFunction<HTMLSelectElement, SelectInputProps> = (
  { label, required = false, name, options, defaultValue = '', error },
  ref
) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
      <select name={name} ref={ref} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span>{error}</span>}
    </div>
  );
};

export default forwardRef(SelectInput);
