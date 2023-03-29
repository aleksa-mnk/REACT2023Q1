import React, { LegacyRef } from 'react';

interface Props {
  inputCountry: LegacyRef<HTMLSelectElement>;
  inputCountryValid: boolean;
}

const CountrySelect: React.FC<Props> = ({ inputCountry, inputCountryValid }) => {
  return (
    <div className="form__country form-block">
      <label className="form__country--label form-label" htmlFor="form__country">
        Country:
      </label>
      <select
        className="form__country--select form-select"
        id="form__country"
        ref={inputCountry}
        defaultValue=""
      >
        <option className="form__country--option" disabled>
          {}
        </option>
        <option className="form__country--option" value="Belarus">
          Belarus
        </option>
        <option className="form__country--option" value="Russia">
          Russia
        </option>
        <option className="form__country--option" value="USA">
          USA
        </option>
        <option className="form__country--option" value="Germany">
          Germany
        </option>
      </select>
      {!inputCountryValid && (
        <span className="form__country--span error-span">Please select a country.</span>
      )}
    </div>
  );
};

export default CountrySelect;
