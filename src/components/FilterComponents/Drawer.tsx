'use client';

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { SlidersVertical } from 'lucide-react';
import FilterComponent from './Filter';

export default function DrawerComponent() {
  return (
    <Drawer shouldScaleBackground={true}>
      <DrawerTrigger asChild>
        <div className="bg-disabled-bg rounded-7xl flex cursor-pointer px-3 py-3 sm:hidden">
          <SlidersVertical size={20} />
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <div className="bg-background-main h-full overflow-y-auto pb-5">
          <FilterComponent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
