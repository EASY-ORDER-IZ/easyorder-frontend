import { toast } from 'sonner';
import { emailWarning } from '@/assets/icons';

export const EmailSonner = () => {
  toast(
    <div className="flex w-[30.375rem] items-start gap-3">
      <img src={emailWarning} alt="Error" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-[var(--color-toast-warning)]">
          Your email address hasn’t been receiving emails.
        </p>
        <p className="text-[0.6rem] text-gray-700">
          Placehoder Description, please check whatever placeholder.
        </p>
      </div>
    </div>,
    {
      style: {
        border: '1px solid var(--color-toast-warning)',
      },
      duration: 4000,
    },
  );
};
