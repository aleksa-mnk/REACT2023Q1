import { ingredientsValidator } from '../../core/utils/validation';
import { TypeInputProps } from '../../core/types';
import ingredients from './ingredients-data.json';
import { Fragment } from 'react';

export const Ingredients = ({ field, register, errors }: TypeInputProps) => (
  <div className="form-control" data-invalid={!!errors.ingredients}>
    <h3 className="form-header">Ingredients</h3>
    <div className="flex">
      {ingredients.map((item) => (
        <Fragment key={item.id}>
          <label className="form-label">
            <input
              {...register(field, {
                validate: {
                  checkIngredients: (v) => ingredientsValidator(v as string[] | false),
                },
              })}
              value={item.id}
              className="form-input"
              aria-label="input-ingredients"
              type="checkbox"
            />{' '}
            {item.id}
          </label>{' '}
        </Fragment>
      ))}
    </div>
    <div className="invalid-feedback">{errors.ingredients && errors.ingredients.message}</div>
  </div>
);
