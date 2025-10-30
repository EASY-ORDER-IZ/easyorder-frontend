import { toast } from 'sonner';
import { errorImg } from '@/assets/icons';

export const ErrorSonner = () => {
  toast.custom(() => (
    <div className="flex w-[26rem] items-center gap-3 rounded-lg border border-[var(--color-toast-danger)] bg-[var(--popover)] bg-white p-3">
      <img src={errorImg} alt="Error" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-[var(--color-toast-danger)]">
          There’s something wrong with your payment.
        </p>
        <p className="text-xs text-gray-700">
          Placeholder Description, please check whatever placeholder.
        </p>
      </div>
    </div>
  ));
};
