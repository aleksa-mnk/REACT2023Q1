import React from 'react';

export const validateText = (text: string) => text.length > 3;
export const validateDate = (date: string) => new Date(date) < new Date();
export const validateCountry = (country: string) => country.length > 0;
export const validatePayment = (
  firstRadio: React.RefObject<HTMLInputElement>,
  secondRadio: React.RefObject<HTMLInputElement>
) => !!(firstRadio.current?.checked || secondRadio.current?.checked);
export const validatePicture = (picture: string) => picture.length > 0;
