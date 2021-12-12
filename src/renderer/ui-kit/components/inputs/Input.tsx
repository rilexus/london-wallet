import { FC, InputHTMLAttributes } from 'react';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  ...props
}) => {
  return <input {...props} type={type} />;
};

export { Input };
