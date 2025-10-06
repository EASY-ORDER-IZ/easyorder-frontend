import { SlidersVertical } from 'lucide-react';
import { clotherCate, cate } from '@/store/staticData';
import CollapsibleComponent from './CollapsibleComponent';
import SliderComponents from './SliderComponents';
import ColorsComponent from './ColorsComponent';
import TypeFilter from './TypeFilter';
import Size from './Size';
const FliterComponent = () => {
  return (
    <div className="border-border/10 hidden flex-col gap-6 rounded-[20px] border px-6 py-5 sm:flex sm:w-[240px] lg:w-[300px]">
      <div className="flex w-full justify-between">
        <span className="align-middle text-[20px] leading-[100%] font-bold">Filters</span>
        <SlidersVertical className="size-6 opacity-40" />
      </div>
      <div className="h-0 w-full border opacity-10"></div>

      <TypeFilter type={clotherCate} />

      <div className="h-0 w-full border opacity-10"></div>
      <CollapsibleComponent component={<SliderComponents />} title="Price" />

      <div className="h-0 w-full border opacity-10"></div>
      <CollapsibleComponent title="Colors" component={<ColorsComponent />} />
      <div className="h-0 w-full border opacity-10"></div>
      <CollapsibleComponent title="Size" component={<Size />} />
      <div className="h-0 w-full border opacity-10"></div>
      <div className="flex w-full flex-col gap-5">
        <CollapsibleComponent title="Dress Style" component={<TypeFilter type={cate} />} />
      </div>
    </div>
  );
};

export default FliterComponent;
