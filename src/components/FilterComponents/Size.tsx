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
            variant="primary"
            className={`text-p flex cursor-pointer gap-[12px] rounded-[62px] border px-5 py-[18px] ${
              isActive
                ? 'text-button-text border-transparent bg-black'
                : 'text-text/60 border-[#F0F0F0] bg-[#F0F0F0]'
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
