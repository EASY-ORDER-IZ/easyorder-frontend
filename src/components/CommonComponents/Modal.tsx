import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import SignInPage from '@/pages/SignInPage';
import { CircleUserRound } from 'lucide-react';
import { useState } from 'react';

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <CircleUserRound
            onClick={() => setOpen(true)}
            size={18}
            className="text-text-secondary cursor-pointer"
          />
        </DialogTrigger>

        <DialogContent className="w-[85%] md:w-[54%]">
          <DialogHeader></DialogHeader>
          <SignInPage />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
