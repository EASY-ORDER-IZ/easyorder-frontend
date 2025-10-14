import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import DialogComponent from './Dialog';
interface Props {
  title?: string;
  min?: number;
  max?: number;
  total?: number;
}

const Sort = ({ title, min, max, total }: Props) => {
  const [position, setPosition] = React.useState('Most Popular');
  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-[25px] leading-[100%] font-bold capitalize">{title}</span>
      <div className="mt-2 flex gap-3 sm:mt-1">
        <span className="text-text/60 text-[15px] leading-[100%] font-normal">
          {`Showing ${min}-${max} of ${total}`}
        </span>
        <div className="hidden gap-1 sm:flex">
          <span className="text-text/60 text-[12px] leading-[100%] font-normal sm:text-[15px]">
            Sort by:
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-1">
                <span className="cursor-pointer leading-[100%] font-normal sm:text-[15px]">
                  {position}
                </span>
                <ChevronDown className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-45" side="bottom" align="start" sideOffset={4}>
              <DropdownMenuLabel>choose one:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="Most Popular">Most Popular</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Most Cheap">Most Cheap</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Most Expensive">Most Expensive</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <DialogComponent />
    </div>
  );
};

export default Sort;
