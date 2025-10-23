import React from 'react';
import {
  Select as UISelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { selectData } from '@/store/selectData';

interface SelectProps {
  placeholder: string;
}

const Select: React.FC<SelectProps> = ({ placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <span>{placeholder}</span>
      <UISelect>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" className="text-color-text-100" />
        </SelectTrigger>
        <SelectContent className="max-h-60 overflow-y-auto rounded-md border-none bg-white shadow-lg">
          {selectData.map((item, index) => (
            <SelectItem
              key={index}
              value={item}
              className="cursor-pointer px-3 py-2 text-gray-400 hover:bg-[#D24560] hover:text-white"
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </UISelect>
    </div>
  );
};

export default Select;
