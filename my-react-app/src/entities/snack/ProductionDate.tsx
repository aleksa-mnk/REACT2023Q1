import { TypeInputProps } from '../../core/types';
import { productionDateValidator } from '../../core/utils/validation';

export const ProductionDate = ({ field, register, errors }: TypeInputProps) => (
  <div className="form-control form-control--date" data-invalid={!!errors.productionDate}>
    <label className="form-label form-label--date">Production Date</label>
    <input
      {...register(field, {
        validate: { checkProductionDate: (v) => productionDateValidator(v as string) },
      })}
      className="form-input form-input--date"
      aria-label="input-production-date"
      type="date"
      min="1960-01-01"
      max="2030-12-31"
    />
    <div className="invalid-feedback invalid-feedback--date">
      {errors.productionDate && errors.productionDate.message}
    </div>
  </div>
);
