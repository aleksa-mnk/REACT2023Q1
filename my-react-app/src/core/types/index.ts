import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

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
