import { SlidersVertical } from 'lucide-react';
import { clotherCate } from '@/store/staticData';
import CollapsibleComponent from './Collapsible';
import SliderComponents from './Slider';
import TypeFilter from './TypeFilter';
import Size from './Size';
import { Button } from '../ui/button/button';
import { Separator } from '@/components/ui/separator';

interface Props {
  appliedFilters: string[];
  setAppliedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange?: [number, number];
  setPriceRange?: React.Dispatch<React.SetStateAction<[number, number]>>;
  onApplyFilters?: () => void;
}

const FliterComponent: React.FC<Props> = ({
  appliedFilters,
  setAppliedFilters,
  priceRange = [0, 250],
  setPriceRange,
  onApplyFilters,
}) => {
  return (
    <div className="border-button-bg/10 rounded-1xl flex w-full max-w-[390px] flex-col gap-6 border px-2 py-5">
      <div className="flex w-full justify-between">
        <span className="text-h3 leading-full flex font-bold">Filters</span>
        <SlidersVertical size={24} className="mt-3 opacity-40" />
      </div>
      <Separator />
      <TypeFilter
        type={clotherCate}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />

      <Separator />
      <CollapsibleComponent
        title="Price"
        component={<SliderComponents range={priceRange} setRange={setPriceRange} />}
      />
      <Separator />
      {/* <CollapsibleComponent title="Colors" component={<ColorsComponent />} /> */}
      {/* <Separator /> */}
      <CollapsibleComponent
        title="Size"
        component={<Size appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} />}
      />
      {/* <Separator /> */}

      <Button
        className="text-button-text rounded-7xl"
        size="apply"
        onClick={onApplyFilters}
        title="Apply Filters"
      />
    </div>
  );
};

export default FliterComponent;
