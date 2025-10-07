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
interface Props {
  title?: string;
  min?: number;
  max?: number;
  total?: number;
}

const Sort = ({ title, min, max, total }: Props) => {
  const [position, setPosition] = React.useState('Most Popular');
  return (
    <div className="flex w-full justify-between">
      <span className="text-[27px] leading-[100%] font-bold capitalize">{title}</span>
      <div className="flex gap-3">
        <span className="text-text/60 text-[15px] leading-[100%] font-normal">
          {`Showing ${min}-${max} of ${total}`}
        </span>
        <div className="flex gap-1">
          <span className="text-text/60 text-[15px] leading-[100%] font-normal">Sort by:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-1">
                <span className="text-[15px] leading-[100%] font-normal">{position}</span>
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
    </div>
  );
};

export default Sort;
