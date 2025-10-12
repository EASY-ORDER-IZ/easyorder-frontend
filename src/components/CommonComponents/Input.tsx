import { Input } from '../ui/input';

interface InputProps {
  placeholder?: string;
  type?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const InputComponent = ({ placeholder, type, leadingIcon, trailingIcon }: InputProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="relative flex w-full">
        {leadingIcon && <div className="absolute inset-y-0 left-4 mt-4">{leadingIcon}</div>}

        <Input
          type={type}
          placeholder={placeholder}
          className={`w-full ${leadingIcon ? 'pl-11' : ''} ${trailingIcon ? 'pr-10' : ''}`}
        />
        {trailingIcon && <div className="absolute inset-y-0 right-4 mt-4">{trailingIcon}</div>}
      </div>
    </div>
  );
};

export default InputComponent;
