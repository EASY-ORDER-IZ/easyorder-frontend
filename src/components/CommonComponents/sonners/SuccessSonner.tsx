import React from 'react';
import { toast } from 'sonner';
import verified from '@/assets/images/CircleCheck.svg';
export const SuccessSonner = () => {
  toast(
    <div className="flex w-[30.375rem] items-start gap-3">
      <img src={verified} alt="verified" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-[#306570]">Your changes has been saved successfully!</p>
        <p className="text-[0.6rem] text-[#306570]">
          Placehoder Description, please check whatever placeholder.{' '}
        </p>
      </div>
    </div>,
    {
      style: {
        border: '1px solid #306570',
      },
      duration: 4000,
    },
  );
};
