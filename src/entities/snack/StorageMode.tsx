import { TypeInputProps } from '../../core/types';
import { modeValidator } from '../../core/utils/validation';

const modes = ['В холодильнике', 'У мамы дома', 'Где попало'];

export const StorageMode = ({ field, register, errors }: TypeInputProps) => (
  <div className="storage-mode" data-invalid={!!errors.storageMode}>
    <div className="storage-mode__options">
      {modes.map((mode) => {
        const id = `${field}-${mode}`;
        return (
          <label key={mode} htmlFor={id} className="storage-mode__option">
            <input
              {...register(field, {
                validate: { checkMode: (v) => modeValidator(v as string) },
              })}
              id={id}
              name={field}
              value={mode}
              aria-label="input-mode"
              type="radio"
              className="storage-mode__input"
            />
            <span className="storage-mode__label">{mode}</span>
          </label>
        );
      })}
    </div>
    <div className="error">{errors.storageMode && errors.storageMode.message}</div>
  </div>
);
