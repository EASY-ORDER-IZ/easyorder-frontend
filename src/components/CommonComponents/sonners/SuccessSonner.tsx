import { toast } from 'sonner';
import { verified } from '@/assets/icons';

export const SuccessSonner = () => {
  toast.custom(() => (
    <div className="flex w-[26rem] items-center gap-3 rounded-lg border border-[var(--color-toast-success)] bg-white p-3">
      <img src={verified} alt="Error" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-[var(--color-toast-success)]">
          Your changes have been saved successfully!
        </p>
        <p className="text-xs text-gray-700">
          Placeholder Description, please check whatever placeholder.
        </p>
      </div>
    </div>
  ));
};
