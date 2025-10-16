import { SlidersVertical } from 'lucide-react';
import { clotherCate, cate } from '@/store/staticData';
import CollapsibleComponent from './Collapsible';
import SliderComponents from './Slider';
import ColorsComponent from './Colors';
import TypeFilter from './TypeFilter';
import Size from './Size';
import { Button } from '../ui/button/button';
import { Separator } from '@/components/ui/separator';

const FliterComponent = () => {
  return (
    <div className="border-button-bg/10 rounded-1xl flex w-full max-w-[290px] flex-col gap-6 border px-6 py-5">
      <div className="flex w-full justify-between">
        <span className="text-h3 leading-full flex font-bold">Filters</span>
        <SlidersVertical size={24} className="opacity-40" />
      </div>
      <Separator />
      <TypeFilter type={clotherCate} />
      <Separator />
      <CollapsibleComponent title="Price" component={<SliderComponents />} />
      <Separator />
      <CollapsibleComponent title="Colors" component={<ColorsComponent />} />
      <Separator />
      <CollapsibleComponent title="Size" component={<Size />} />
      <Separator />
      <CollapsibleComponent title="Dress Style" component={<TypeFilter type={cate} />} />

      <Button className="text-button-text rounded-7xl" size="apply" variant="default">
        <span className="text-table-sm leading-full tracking-normal">Apply Filter</span>
      </Button>
    </div>
  );
};

export default FliterComponent;
