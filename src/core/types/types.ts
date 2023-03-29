import React, { RefObject } from 'react';

export type Errors = {
  imgSrc: string | null | undefined;
  date: string | null | undefined;
  name: string | null | undefined;
  cat: string | null | undefined;
  roles: string | null | undefined;
  accepted: string | null | undefined;
};

export type NewCardComponentProps = {
  id: string;
  imgSrc: string;
  date: string;
  name: string;
  cat: string;
  roles: string;
  male: boolean;
  female: boolean;
  accepted: boolean;
};

export type FormCardComponentProps = {
  cardData: NewCardComponentProps;
};

export type SearchString = {
  value: string;
};

export interface NameFieldsProps {
  errors: Errors;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    name: string
  ) => void;
  nameInputRef: RefObject<HTMLInputElement>;
}

export type CatSelectComponent = {
  catInputRef: React.RefObject<HTMLSelectElement>;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLSelectElement>,
    value: string | undefined,
    param: string
  ) => void;
  errors: Errors;
};

export interface DateFieldProps {
  dateInputRef: RefObject<HTMLInputElement>;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    fieldName: string
  ) => void;
  errors: Errors;
}

export type FormComponent = {
  addCard: (data: NewCardComponentProps) => void;
};

export type SwitcherComponent = {
  acceptedInputRef: React.RefObject<HTMLInputElement>;
  errors: Errors;
  checked: boolean;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: boolean,
    param: string
  ) => void;
};

export type ImageFieldComponent = {
  fileInputRef: React.RefObject<HTMLInputElement>;
  errors: Errors;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    param: string
  ) => void;
};

export interface State {
  cardsData: NewCardComponentProps[];
}
