import { SlidersVertical } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import FliterComponent from './Filter';

const DialogComponent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-disabled-bg cursor-pointer rounded-[62px] px-3 py-3 sm:hidden">
          <SlidersVertical className="h-5 w-5" />
        </div>
      </DialogTrigger>

      <DialogContent className="bg-transparent p-0">
        <div className="border-border/10 animate-slide-up sm:border-border/10 bg-button-bg-sec fixed right-0 bottom-0 left-0 mx-auto max-h-[1020px] w-full gap-6 overflow-y-auto rounded-t-[20px] border-t px-6 py-5">
          <FliterComponent />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
