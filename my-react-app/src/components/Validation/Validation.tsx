import React, { memo } from 'react';
import { FieldError } from 'react-hook-form/dist/types';

interface ValidationProps {
  error?: FieldError | undefined;
}

const Validation: React.FC<ValidationProps> = memo(({ error }) => (
  <p className="error" style={{ display: error ? 'block' : 'none' }}>
    {error && error.message}
  </p>
));

export default Validation;
