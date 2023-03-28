interface ValidationResult {
  valid: boolean;
  errorMessage?: string;
}

export function validateRequired(value: string, label: string): ValidationResult {
  if (!value) {
    return { valid: false, errorMessage: `${label} is required` };
  }
  return { valid: true };
}

export function validateEmail(value: string, label: string): ValidationResult {
  if (!value) {
    return { valid: true }; // allow empty value for optional field
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return { valid: false, errorMessage: `${label} is not a valid email address` };
  }
  return { valid: true };
}

export function validatePassword(value: string, label: string): ValidationResult {
  if (!value) {
    return { valid: false, errorMessage: `${label} is required` };
  }
  if (value.length < 8) {
    return { valid: false, errorMessage: `${label} must be at least 8 characters long` };
  }
  return { valid: true };
}

export function validateConfirmPassword(
  value: string,
  label: string,
  password: string
): ValidationResult {
  if (!value) {
    return { valid: false, errorMessage: `${label} is required` };
  }
  if (value !== password) {
    return { valid: false, errorMessage: `${label} does not match the password` };
  }
  return { valid: true };
}

export function validateFileExtension(
  file: File,
  label: string,
  allowedExtensions: string[]
): ValidationResult {
  if (!file) {
    return { valid: false, errorMessage: `${label} is required` };
  }
  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
    return {
      valid: false,
      errorMessage: `${label} must be a ${allowedExtensions.join(' or ')} file`,
    };
  }
  return { valid: true };
}
