import { Input } from '../ui/input';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
}

const InputComponent = ({
  placeholder,
  type,
  leadingIcon,
  trailingIcon,
  value,
  onChange,
  onBlur,
  name,
  className = '',
}: InputProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="relative flex w-full">
        {leadingIcon && <div className="absolute inset-y-0 left-4 mt-4">{leadingIcon}</div>}

        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full ${leadingIcon ? 'pl-14' : ''} ${
            trailingIcon ? 'pr-10' : ''
          } ${className}`}
        />

        {trailingIcon && <div className="absolute inset-y-0 right-4 mt-4">{trailingIcon}</div>}
      </div>
    </div>
  );
};

export default InputComponent;
