import React from 'react';

interface AdditionalOptionsProps {
  inputPackage: React.RefObject<HTMLInputElement>;
  inputDelivery: React.RefObject<HTMLInputElement>;
  inputTransfer: React.RefObject<HTMLInputElement>;
  inputCheckboxValid: boolean;
}

const AdditionalOptions: React.FC<AdditionalOptionsProps> = ({
  inputPackage,
  inputDelivery,
  inputTransfer,
  inputCheckboxValid,
}) => {
  return (
    <div className="form__additional form-block">
      <p>Additional options:</p>
      <br />
      <label className="form__additional--label form-label" htmlFor="form__package">
        Package:
      </label>
      <input
        className="form__additional--input form-input"
        type="checkbox"
        id="form__package"
        ref={inputPackage}
      />
      <label className="form__additional form-label" htmlFor="form__delivery">
        Delivery:
      </label>
      <input
        className="form__additional--input form-input"
        type="checkbox"
        id="form__delivery"
        ref={inputDelivery}
      />
      <label className="form__additional form-label" htmlFor="form__transfer">
        Transfer:
      </label>
      <input
        className="form__additional--input form-input"
        type="checkbox"
        id="form__transfer"
        ref={inputTransfer}
      />
      {!inputCheckboxValid && (
        <span className="form__payment--span error-span">Please select a checkbox.</span>
      )}
    </div>
  );
};

export default AdditionalOptions;
