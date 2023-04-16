import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

export interface ICard {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
  rating: string;
  source: string;
}

export interface IFormValues {
  snackName: string;
  productionDate: string;
  taste: string;
  ingredients: string[];
  storageMode: string;
  image: FileList | null;
}

export type ISnack = Omit<IFormValues, 'image'> & {
  id?: string;
  snackName?: string;
  productionDate?: string;
  taste?: string;
  ingredients?: string[];
  storageMode?: string;
  image: string;
};

export type TypeInputProps = {
  field: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

interface Clickable {
  onCardClick: (card: ICard) => void;
}

export interface CardProps extends Clickable {
  card: ICard;
}

export interface CardListProps extends Clickable {
  cards: ICard[];
}
