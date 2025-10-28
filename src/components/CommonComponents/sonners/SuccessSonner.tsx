import React from 'react';
import { toast } from 'sonner';
import { verified } from '@/assets/icons';

export const SuccessSonner = () => {
  toast(
    <div className="flex w-[30rem] items-start gap-3">
      <img src={verified} alt="verified" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="text-[var(--color-toast-success)]">
          Your changes have been saved successfully!
        </p>
        <p className="text-xxs text-[var(--color-toast-success)]">
          Placeholder description, please check whatever placeholder.
        </p>
      </div>
    </div>,
    {
      style: {
        border: '1px solid var(--color-toast-success)',
      },
      duration: 4000,
    },
  );
};

export default SuccessSonner;
