import Button from '../ui/Button';
import SnackImage from '../../entities/snack/SnackImage';
import { SnackName } from '../../entities/snack/SnackName';
import { ProductionDate } from '../../entities/snack/ProductionDate';
import { StorageMode } from '../../entities/snack/StorageMode';
import { Taste } from '../../entities/snack/Taste';
import { Ingredients } from '../../entities/snack/Ingredients';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';
import { IFormValues } from '../../core/types';

export const SnackForm = ({ addSnack }: ISnackFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({ reValidateMode: 'onSubmit' });

  const submitForm = useCallback<SubmitHandler<IFormValues>>(
    (data) => {
      addSnack(data);
      reset();
    },
    [addSnack, reset]
  );

  return (
    <div className="snack-form">
      <form onSubmit={handleSubmit(submitForm)}>
        <SnackName field="snackName" register={register} errors={errors} />
        <ProductionDate field="productionDate" register={register} errors={errors} />
        <Taste field="taste" register={register} errors={errors} />
        <Ingredients field="ingredients" register={register} errors={errors} />
        <StorageMode field="storageMode" register={register} errors={errors} />
        <SnackImage field="image" register={register} errors={errors} />
        <div className="snack-form__row flex-center">
          <Button type="submit" variant="primary" aria-label="button-submit">
            Send
          </Button>
          <Button type="button" aria-label="button-reset" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

interface ISnackFormProps {
  addSnack: (snack: IFormValues) => void;
}
