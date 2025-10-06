import { ChevronRight, SlidersVertical } from 'lucide-react';
import { clotherCate } from '../store/staticData';
import CollapsibleComponent from './CollapsibleComponent';
const FliterComponent = () => {
  return (
    <div className="border-border/10 hidden flex-col gap-6 rounded-[20px] border px-6 py-5 sm:flex sm:w-[240px] lg:w-[300px]">
      <div className="flex w-full justify-between">
        <span className="align-middle text-[20px] leading-[100%] font-bold">Filters</span>
        <SlidersVertical className="size-6 opacity-40" />
      </div>
      <div className="h-0 w-full border opacity-10"></div>
      <div className="flex w-full flex-col gap-5">
        {clotherCate.map((c) => {
          return (
            <div className="flex w-full justify-between">
              <span className="text-[16px] leading-[100%] opacity-60">{c.title}</span>
              <ChevronRight className="size-6 cursor-pointer opacity-60" />
            </div>
          );
        })}
        <div className="h-0 w-full border opacity-10"></div>
        <CollapsibleComponent title="Price" />
      </div>
    </div>
  );
};

export default FliterComponent;
