import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  variant?: 'default' | 'primary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = 'default', ...rest }: ButtonProps): JSX.Element => (
  <button type="submit" className={`button button_${variant}`} {...rest} />
);

export default Button;
