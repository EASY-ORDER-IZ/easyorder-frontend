import { Button } from '../ui/button/button';
import { size } from '../../store/staticData';
import { useState } from 'react';
const Size = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleSelect = (index: number) => {
    return setActiveIndex(index);
  };
  return (
    <div className="flex w-full flex-wrap gap-2">
      {size.map((s, index) => {
        const isActive = activeIndex === index;
        return (
          <Button
            onClick={() => handleSelect(index)}
            key={index}
            variant="default"
            className={`flex cursor-pointer gap-[12px] rounded-[62px] border px-5 py-[18px] ${
              isActive
                ? 'bg-button-bg text-button-text border-transparent'
                : 'bg-disabled-bg text-text/60 border-disabled-bg'
            } `}
          >
            {s.title}
          </Button>
        );
      })}
    </div>
  );
};

export default Size;
