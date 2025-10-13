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
    <div className="border-button-bg/10 flex w-full flex-col gap-6 sm:w-[290px] sm:rounded-[20px] sm:border md:px-6 md:py-5">
      <div className="flex w-full justify-between">
        <span className="text-[20px] leading-[100%] font-bold">Filters</span>
        <SlidersVertical className="size-6 opacity-40" />
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

      <Button className="text-button-text rounded-[62px]" size="apply" variant="default">
        <span className="text-[14px] leading-[100%] tracking-normal">Apply Filter</span>
      </Button>
    </div>
  );
};

export default FliterComponent;

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
    <div className="border-button-bg/10 flex w-full flex-col gap-6 border px-6 py-5 sm:w-[290px] sm:rounded-[20px] sm:border">
      <div className="flex w-full justify-between">
        <span className="text-[20px] leading-[100%] font-bold">Filters</span>
        <SlidersVertical className="size-6 opacity-40" />
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

      <Button className="text-button-text rounded-[62px]" size="apply" variant="default">
        <span className="text-[14px] leading-[100%] tracking-normal">Apply Filter</span>
      </Button>
    </div>
  );
};

export default FliterComponent;
