import { toast } from 'sonner';
import errorImg from '@/assets/images/CircleAlert.svg';

export const ErrorSonner = () => {
  toast(
    <div className="flex w-[30.375rem] items-start gap-3">
      <img src={errorImg} alt="Error" className="mt-0.5 h-[1.5rem] w-[1.5rem]" />
      <div>
        <p className="font-semibold text-[#FB4549]">There’s something wrong with your payment.</p>
        <p className="text-[0.6rem] text-gray-700">
          Placeholder Description, please check whatever placeholder.
        </p>
      </div>
    </div>,
    {
      style: {
        border: '1px solid #FB4549',
      },
      duration: 4000,
    },
  );
};
