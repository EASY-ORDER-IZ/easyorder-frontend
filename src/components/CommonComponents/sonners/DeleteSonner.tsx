import React from 'react';
import { toast } from 'sonner';
import { trash } from '@/assets/icons';
export const DeleteSonner = () => {
  toast(
    <div className="flex w-[30.375rem] items-start gap-3">
      <img src={trash} alt="trash" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-[var(--color-toast-action)]">
          Your selected items has been deleted.
        </p>
        <p className="text-[0.6rem] text-gray-700">
          Placehoder Description, please check whatever placeholder.{' '}
        </p>
      </div>
    </div>,
    {
      style: {
        border: '1px solid var(--color-toast-action)',
      },
      duration: 4000,
    },
  );
};
