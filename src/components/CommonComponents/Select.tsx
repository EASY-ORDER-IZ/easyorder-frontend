import React from 'react';
import {
  Select as UISelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface SelectProps {
  placeholder: string;
  data: Option[];
  className?: string;
  triggerClassName?: string;
  onChange?: (value: string) => void;
  variant?: 'default' | 'minimal';
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  data,
  className = '',
  triggerClassName = '',
  onChange,
  variant = 'default',
}) => {
  const minimalStyles = `
    border-none
    outline-none
    ring-0
    focus:ring-0
    focus:ring-offset-0
    shadow-none
    bg-transparent
    h-auto
    px-0
  `;

  const defaultStyles = `
    border
    border-input
    rounded-md
    px-3
    h-10
  `;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span>{placeholder}</span>

      <UISelect onValueChange={onChange}>
        <SelectTrigger
          className={`min-w-0 ${variant === 'minimal' ? minimalStyles : defaultStyles} ${triggerClassName} `}
        >
          <SelectValue placeholder="Select" />
        </SelectTrigger>

        <SelectContent className="max-h-60 overflow-y-auto rounded-md border bg-white shadow-lg">
          {data.map((item) => (
            <SelectItem
              key={item.id}
              value={item.value}
              className="px-3 py-2 whitespace-nowrap text-gray-600 hover:bg-[#D24560] hover:text-white"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </UISelect>
    </div>
  );
};

export default Select;
