import { toast } from 'sonner';
import { emailWarning } from '@/assets/icons';

export const EmailSonner = () => {
  toast.custom(() => (
    <div className="flex w-[26rem] items-center gap-3 rounded-lg border border-[var(--color-toast-warning)] bg-white p-3">
      <img src={emailWarning} alt="Error" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-[var(--color-toast-warning)]">
          Your email address hasn’t been receiving emails.
        </p>
        <p className="text-xs text-gray-700">
          Placeholder Description, please check whatever placeholder.
        </p>
      </div>
    </div>
  ));
};
