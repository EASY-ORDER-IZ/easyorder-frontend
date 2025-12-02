import { clotherCate, womenMenCate, kidsCate } from '@/store/staticData';
import CollapsibleComponent from './Collapsible';
import SliderComponents from './Slider';
import TypeFilter from './TypeFilter';
import Size from './Size';
import { Button } from '../ui/button/button';
import { Separator } from '@/components/ui/separator';

const FliterComponent = () => {
  return (
    <div className="border-button-bg/10 rounded-1xl custom-scrollbar flex h-280 w-full max-w-50 flex-col gap-6 overflow-y-auto border px-6 py-5">
      <div className="flex w-full justify-between">
        <span className="text-small text-text-200 leading-full flex font-bold">Categories</span>
      </div>
      <CollapsibleComponent
        title="Women"
        component={<TypeFilter component={womenMenCate} type={clotherCate} filterKey="Women" />}
      />
      <Separator />
      <CollapsibleComponent
        title="Men"
        component={<TypeFilter component={womenMenCate} type={clotherCate} filterKey="Men" />}
      />
      <Separator />
      <CollapsibleComponent
        title="Kids"
        component={<TypeFilter component={kidsCate} type={clotherCate} filterKey="Kids" />}
      />
      <Separator />
      <div className="flex w-full justify-between">
        <span className="text-small text-text-200 leading-full flex font-bold">Size</span>
      </div>
      <Size />
      <div className="flex w-full justify-between">
        <span className="text-small text-text-200 leading-full flex font-bold">Price</span>
      </div>
      <SliderComponents />
      <Button className="rounded-7xl text-sm" title="Apply Filters" />
    </div>
  );
};

export default FliterComponent;
