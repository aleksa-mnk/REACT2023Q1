import { TypeInputProps } from '../../core/types';
import { snackNameValidator } from '../../core/utils/validation';

export const SnackName = ({ field, register, errors }: TypeInputProps) => (
  <div className="form-control" data-invalid={!!errors.snackName}>
    <label className="form-label">Snack Name</label>
    <input
      {...register(field, {
        validate: { checkSnackName: (v) => snackNameValidator(v as string) },
      })}
      className="form-input"
      aria-label="input-snack-name"
      type="text"
    />
    <div className="invalid-feedback">{errors.snackName && errors.snackName.message}</div>
  </div>
);
