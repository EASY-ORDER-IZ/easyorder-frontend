import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface OptionItem {
  label?: string;
  value: string;
}

interface SelectComponentProps {
  data: OptionItem[];
  placeholder?: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  data,
  placeholder,
  className,
  onValueChange,
}) => {
  const [value] = React.useState<string | undefined>(undefined);

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={cn('w-[180px]', className)}>
        <SelectValue placeholder={placeholder || 'Select...'} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {data.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="mt-2 hover:bg-[var(--color-primary-main)] hover:text-white"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
