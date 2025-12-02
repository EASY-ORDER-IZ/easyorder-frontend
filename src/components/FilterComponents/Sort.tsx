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
import DrawerComponent from './Drawer';
import AppliedFilters from './AppliedFilters';

const Sort = () => {
  const [position, setPosition] = React.useState('Most Popular');
  return (
    <div className="flex w-full items-center justify-between">
      <AppliedFilters />
      <div className="mt-2 flex gap-3 sm:mt-1">
        <div className="hidden items-center gap-1 whitespace-nowrap sm:flex">
          <span className="text-list">Sort by:</span>
          <DropdownMenu>
            <DropdownMenuTrigger
              icon={
                <div className="flex items-center justify-center gap-1">
                  <span className="text-list text-text-800 cursor-pointer font-bold">
                    {position}
                  </span>
                  <ChevronDown size={20} className="text-text-800 font-bold" />
                </div>
              }
            />

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
      <DrawerComponent />
    </div>
  );
};

export default Sort;
