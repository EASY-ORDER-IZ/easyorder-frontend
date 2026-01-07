import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { SlidersVertical } from 'lucide-react';
import FilterComponent from './Filter';

interface Props {
  appliedFilters: string[];
  setAppliedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange?: [number, number];
  setPriceRange?: React.Dispatch<React.SetStateAction<[number, number]>>;
  onApplyFilters?: () => void;
}

export default function DrawerComponent({
  appliedFilters,
  setAppliedFilters,
  priceRange,
  setPriceRange,
  onApplyFilters,
}: Props) {
  return (
    <Drawer shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <div className="bg-disabled-bg rounded-7xl flex cursor-pointer px-3 py-3 sm:hidden">
          <SlidersVertical size={20} />
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-background-main m-0 h-screen w-full rounded-none p-0">
        <FilterComponent
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onApplyFilters={onApplyFilters}
        />
      </DrawerContent>
    </Drawer>
  );
}
