import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
interface Props {
  page?: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  setOpen?: (value: boolean) => void;
}
const Modal = ({ page, trigger, open, setOpen }: Props) => {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent className="custom-scroll max-h-[80vh] w-[85%] max-w-[850px] overflow-y-auto md:w-[56%] lg:w-[100%]">
          <DialogHeader></DialogHeader>
          {page}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
