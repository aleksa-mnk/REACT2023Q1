import React from 'react';
import { CheckboxProps } from '../../../core/types/types';

class CheckboxInput extends React.Component<CheckboxProps> {
  render() {
    const { errors, maleInputRef, femaleInputRef, femaleChecked, maleChecked, onRoleChange } =
      this.props;
    return (
      <>
        <fieldset className="form__fieldset">
          <legend className="form__legend">GENDER</legend>
          <ul className="form__list form__list--checkbox">
            <li className="form__item form__item--checkbox">
              <input
                onChange={onRoleChange}
                ref={maleInputRef}
                type="checkbox"
                id="front"
                value="male"
                checked={maleChecked}
              />
              <label className="form__label form__label--checkbox" htmlFor="front">
                MALE
              </label>
            </li>

            <li className="form__item form__item--checkbox">
              <input
                ref={femaleInputRef}
                onChange={onRoleChange}
                type="checkbox"
                id="back"
                value="female"
                checked={femaleChecked}
              />
              <label className="form__label  form__label--checkbox" htmlFor="back">
                FEMALE
              </label>
            </li>
          </ul>
        </fieldset>
        {errors.roles && <span className="form__error-text">{errors.roles}</span>}
      </>
    );
  }
}

export default CheckboxInput;
