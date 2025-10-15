'use client';
import { Drawer, DrawerContent, DrawerTrigger, DrawerOverlay } from '@/components/ui/drawer';
import { SlidersVertical } from 'lucide-react';
import FilterComponent from './Filter';

export default function DrawerComponent() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="bg-disabled-bg rounded-7xl cursor-pointer px-3 py-3 sm:hidden">
          <SlidersVertical className="h-5 w-5" />
        </div>
      </DrawerTrigger>

      {/* Add overlay for background dimming */}
      <DrawerOverlay className="fixed inset-0" />

      <DrawerContent className="bg-background-main fixed bottom-0 left-1/2 z-50 flex w-full max-w-md -translate-x-1/2 items-center rounded-t-2xl p-6 shadow-lg">
        <FilterComponent />
      </DrawerContent>
    </Drawer>
  );
}
