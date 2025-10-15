'use client';

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { SlidersVertical } from 'lucide-react';
import FilterComponent from './Filter';

export default function DrawerComponent() {
  return (
    <Drawer shouldScaleBackground={true}>
      <DrawerTrigger asChild>
        <div className="bg-disabled-bg rounded-7xl flex cursor-pointer px-3 py-3 sm:hidden">
          <SlidersVertical className="h-5 w-5" />
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex h-[90vh] flex-col items-center justify-center !border-0 !bg-transparent">
        <div className="bg-background-main scrollbar-thin scrollbar-thumb-gray-50 scrollbar-track-transparen rounded-t-1xl flex h-[95vh] justify-center overflow-y-auto">
          <FilterComponent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
