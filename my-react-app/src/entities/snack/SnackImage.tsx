import { useCallback } from 'react';
import { TypeInputProps } from '../../core/types';
import { snackImageFileValidator } from '../../core/utils/validation';

const SnackImage = ({ field, register, errors }: TypeInputProps) => {
  const checkSnackImage = useCallback((v: unknown) => snackImageFileValidator(v as FileList), []);

  return (
    <div className="form-control" data-invalid={!!errors.image}>
      <label className="form-label">Snack Image</label>
      <input
        {...register(field, {
          validate: { checkSnackImage },
        })}
        className="form-input"
        aria-label="input-snack-image"
        type="file"
        accept="image/x-png,image/gif,image/jpeg,image/png,image/webp"
      />
      <div className="invalid-feedback">{errors.image && errors.image.message}</div>
    </div>
  );
};

export default SnackImage;
