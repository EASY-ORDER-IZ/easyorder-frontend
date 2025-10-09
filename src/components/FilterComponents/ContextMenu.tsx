import { SlidersVertical } from 'lucide-react';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent } from '@/components/ui/context-menu';
import FliterComponent from './Filter';

const ContextComponent = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="bg-disabled-bg cursor-pointer rounded-[62px] px-3 py-3 sm:hidden">
          <SlidersVertical className="h-5 w-5" />
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent className="w-56 p-2">
        <FliterComponent />
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextComponent;
