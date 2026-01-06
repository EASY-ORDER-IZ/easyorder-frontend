import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

interface Props {
  range?: [number, number];
  setRange?: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const SliderComponents = ({ range = [50, 1500], setRange }: Props) => {
  const [internalRange, setInternalRange] = useState<[number, number]>(range);
  const currentRange = setRange ? range : internalRange;
  const currentSetRange = setRange || setInternalRange;
  return (
    <div className="flex flex-col gap-2">
      <Slider
        className="bg-filter-bg [&_[data-orientation=horizontal]>span]:bg-[var(--color-primary-main)] [&_[data-orientation=horizontal]>span>span]:bg-[var(--color-primary-main)] [&_[data-orientation=horizontal]>span>span:hover]:bg-[var(--color-primary-main)] [&_[data-orientation=horizontal]>span>span[data-active=true]]:bg-[var(--color-primary-main)] [&_[data-orientation=horizontal]>span[data-active=true]]:bg-[var(--color-primary-main)]"
        value={currentRange}
        onValueChange={currentSetRange}
        min={0}
        max={1500}
        step={1}
      />

      <div className="flex origin-left justify-around">
        {currentRange.map((r, index) => {
          return (
            <span key={index} className="text-[14px] leading-[100%] font-medium">{`$${r}`}</span>
          );
        })}
      </div>
    </div>
  );
};

export default SliderComponents;
