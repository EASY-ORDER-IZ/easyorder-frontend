import React from 'react';
import { Checkbox } from '../ui/checkbox';

interface Props {
  appliedFilters: string[];
  setAppliedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const Size = ({ appliedFilters, setAppliedFilters }: Props) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];

  return (
    <div>
      {sizes.map((size, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox
            id={size}
            checked={appliedFilters.includes(size)}
            onCheckedChange={() => {
              if (appliedFilters.includes(size)) {
                setAppliedFilters(appliedFilters.filter((f) => f !== size));
              } else {
                setAppliedFilters([...appliedFilters, size]);
              }
            }}
          />
          <label htmlFor={size}>{size}</label>
        </div>
      ))}
    </div>
  );
};

export default Size;
