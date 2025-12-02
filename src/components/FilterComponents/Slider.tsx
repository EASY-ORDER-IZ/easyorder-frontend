import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { useFiltersStore } from '@/store/useFiltersStore';

const SliderComponents = () => {
  const [range, setRange] = useState([50, 200]);
  const addFilter = useFiltersStore((s) => s.addFilter);
  const removeFilter = useFiltersStore((s) => s.removeFilter);

  const handleChange = (val: number[]) => {
    setRange(val);

    const [min, max] = val;

    removeFilter('price-range');

    addFilter({
      key: 'price',
      label: `$${min} - $${max}`,
      value: 'price-range',
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex origin-left justify-around">
        {range.map((r, index) => {
          return (
            <span
              key={index}
              className="text-small bg-primary-main text-text-50 after:border-t-primary-main relative flex items-center justify-center rounded-full px-3 py-1 leading-[100%] after:absolute after:top-full after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-t-6 after:border-r-4 after:border-l-4 after:border-r-transparent after:border-l-transparent after:content-['']"
            >{`$${r}`}</span>
          );
        })}
      </div>
      <Slider
        className="bg-filter-bg"
        value={range}
        onValueChange={handleChange}
        min={0}
        max={250}
        step={1}
      />
    </div>
  );
};

export default SliderComponents;
