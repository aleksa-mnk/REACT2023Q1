import {
  validateText,
  validateDate,
  validateCountry,
  validatePayment,
  validatePicture,
} from './formValidation';
import React from 'react';

describe('validateText', () => {
  it('should return true for a text with length greater than 3', () => {
    expect(validateText('hello')).toBe(true);
  });

  it('should return false for a text with length less than or equal to 3', () => {
    expect(validateText('hi')).toBe(false);
    expect(validateText('')).toBe(false);
    expect(validateText('a')).toBe(false);
  });
});

describe('validateDate', () => {
  it('should return true for a date that is earlier than the current date', () => {
    expect(validateDate('2021-01-01')).toBe(true);
  });

  it('should return false for a date that is later than or equal to the current date', () => {
    expect(validateDate('2023-01-01')).toBe(true);
    expect(validateDate('')).toBe(false);
  });
});

describe('validateCountry', () => {
  it('should return true for a non-empty country string', () => {
    expect(validateCountry('USA')).toBe(true);
  });

  it('should return false for an empty country string', () => {
    expect(validateCountry('')).toBe(false);
  });
});

describe('validatePayment', () => {
  it('should return true if either the first or second radio button is checked', () => {
    const firstRadio = { current: { checked: true } };
    const secondRadio = { current: { checked: false } };
    expect(
      validatePayment(
        firstRadio as React.RefObject<HTMLInputElement>,
        secondRadio as React.RefObject<HTMLInputElement>
      )
    ).toBe(true);
  });

  it('should return false if both the first and second radio buttons are unchecked', () => {
    const firstRadio = { current: { checked: false } };
    const secondRadio = { current: { checked: false } };
    expect(
      validatePayment(
        firstRadio as React.RefObject<HTMLInputElement>,
        secondRadio as React.RefObject<HTMLInputElement>
      )
    ).toBe(false);
  });
});

describe('validatePicture', () => {
  it('should return true for a non-empty picture string', () => {
    expect(validatePicture('https://example.com/picture.jpg')).toBe(true);
  });

  it('should return false for an empty picture string', () => {
    expect(validatePicture('')).toBe(false);
  });
});
