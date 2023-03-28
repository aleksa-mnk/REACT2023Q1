import React from 'react';
import { Errors } from '../../../core/types/types';

type Props = {
  errors: Partial<Errors>;
  maleInputRef: React.RefObject<HTMLInputElement>;
  femaleInputRef: React.RefObject<HTMLInputElement>;
  maleChecked: boolean;
  femaleChecked: boolean;
  onRoleChange: () => void;
};

class CheckboxInput extends React.Component<Props> {
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
                id="m"
                value="male"
                checked={maleChecked}
              />
              <label className="form__label form__label--checkbox" htmlFor="m">
                MALE
              </label>
            </li>

            <li className="form__item form__item--checkbox">
              <input
                ref={femaleInputRef}
                onChange={onRoleChange}
                type="checkbox"
                id="f"
                value="female"
                checked={femaleChecked}
              />
              <label className="form__label  form__label--checkbox" htmlFor="f">
                FEMALE
              </label>
            </li>
          </ul>
        </fieldset>
        {errors && errors.roles && <span className="form__error-text">{errors.roles}</span>}
      </>
    );
  }
}

export default CheckboxInput;
