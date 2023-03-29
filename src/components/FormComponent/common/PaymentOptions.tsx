import React, { LegacyRef } from 'react';

type PaymentOptionsProps = {
  inputCashPay: LegacyRef<HTMLInputElement>;
  inputCardPay: LegacyRef<HTMLInputElement>;
  inputPayValid: boolean;
};

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  inputCashPay,
  inputCardPay,
  inputPayValid,
}) => {
  return (
    <div className="form__payment form-block">
      <label className="form__payment--label form-label" htmlFor="form__cash-pay">
        Cash:
      </label>
      <input
        className="form__payment--input form-input"
        type="radio"
        id="form__cash-pay"
        value="cash"
        name="pay"
        ref={inputCashPay}
      />
      <label className="form__payment--label form-label" htmlFor="form__card-pay">
        Card:
      </label>
      <input
        className="form__payment--input form-input"
        type="radio"
        id="form__card-pay"
        value="card"
        name="pay"
        ref={inputCardPay}
      />
      {!inputPayValid && (
        <span className="form__payment--span error-span">Please select a payment option.</span>
      )}
    </div>
  );
};

export default PaymentOptions;
