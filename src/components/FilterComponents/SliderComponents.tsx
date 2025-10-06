import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const SliderComponents = () => {
  const [range, setRange] = useState([50, 200]);
  return (
    <div className="flex flex-col gap-2">
      <Slider
        className="bg-filter-bg"
        value={range}
        onValueChange={setRange}
        min={0}
        max={250}
        step={1}
      />

      <div className="flex origin-left justify-around">
        {range.map((r) => {
          return <span className="text-[14px] leading-[100%] font-medium">{`$${r}`}</span>;
        })}
      </div>
    </div>
  );
};

export default SliderComponents;
