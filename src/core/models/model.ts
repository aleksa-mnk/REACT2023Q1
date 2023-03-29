export type ProductModel = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingModel;
};

export type RatingModel = {
  rate: number;
  count: number;
};

export type ProductProps = {
  product: ProductModel;
};

export type GeneralState = {
  pageTitle: string;
};

export type FormInput = {
  id?: number;
  title: string;
  date: string;
  country: string;
  pack?: boolean;
  transfer?: boolean;
  delivery?: boolean;
  pay: string;
  profilePicture: string;
};

export type FormCardInput = {
  card: FormInput;
};

export type FormCards = {
  cards: FormInput[];
};

export type FormProps = {
  addCard: (newCard: FormInput) => void;
};

export type FormValidState = {
  inputTitleValid: boolean;
  inputDateValid: boolean;
  inputCountryValid: boolean;
  inputPackageValid?: boolean;
  inputTransferValid?: boolean;
  inputDeliveryValid?: boolean;
  inputPayValid: boolean;
  formValid: boolean;
  inputCheckboxValid: boolean;
  inputPictureValid?: boolean;
  inputPictureUrl?: string;
};
