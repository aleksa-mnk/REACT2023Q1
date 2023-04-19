import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { GiphyResponse } from '../store/giphyApi';

export interface ICard {
  id: string;
  title: string;
  source: string;
  rating: string;
  slug: string;
  imageUrl: string;
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
  onCardClick?: (card: GiphyResponse) => void;
}

export interface CardProps extends Clickable {
  card: GiphyResponse;
}

export interface GifsResponse {
  data: GiphyResponse[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

export interface CardListProps extends Clickable {
  cards: GifsResponse | never[];
}
