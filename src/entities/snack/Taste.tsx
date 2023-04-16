import React from 'react';
import { tasteValidator } from '../../core/utils/validation';
import { TypeInputProps } from '../../core/types';
import options from './taste-options.json';

const TasteOptions = options.map((option) => (
  <React.Fragment key={option.value}>
    <option value={option.value}>{option.option}</option>
  </React.Fragment>
));

export const Taste = ({ field, register, errors }: TypeInputProps) => (
  <div data-invalid={!!errors.taste}>
    <label className="form-label" htmlFor="input-taste">
      Taste
    </label>
    <select
      id="input-taste"
      {...register(field, {
        validate: { checkTaste: (v) => tasteValidator(v as string) },
      })}
      aria-label="input-taste"
    >
      {TasteOptions}
    </select>
    <div className="error">{errors.taste && errors.taste.message}</div>
  </div>
);
