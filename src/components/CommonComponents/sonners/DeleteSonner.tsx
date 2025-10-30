import { toast } from 'sonner';
import { trash } from '@/assets/icons';

export const DeleteSonner = () => {
  toast.custom(() => (
    <div className="flex w-[26rem] items-center gap-3 rounded-lg border border-[var(--color-toast-action)] bg-white p-3">
      <img src={trash} alt="Error" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-gray-700">Your selected items has been deleted</p>
        <p className="text-xs text-gray-700">
          Placeholder Description, please check whatever placeholder.
        </p>
      </div>
    </div>
  ));
};
