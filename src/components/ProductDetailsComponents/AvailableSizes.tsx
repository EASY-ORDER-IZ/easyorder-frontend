import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface AvailableSizesProps {
  sizes: string[];
  defaultValue?: string;
}

const AvailableSizes: React.FC<AvailableSizesProps> = ({ sizes, defaultValue }) => {
  return (
    <RadioGroup defaultValue={defaultValue || sizes[0]} className="flex gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex items-center space-x-2">
          <RadioGroupItem value={size} id={size} className="border-gray-400" />
          <Label htmlFor={size}>{size}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default AvailableSizes;
