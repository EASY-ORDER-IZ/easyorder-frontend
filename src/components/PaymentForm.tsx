'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../components/ui/button/button';
import { Checkbox } from '@/components/ui/checkbox';
import InputComponent from '../components/CommonComponents/Input';
import { PaymentSchema, type PaymentFormType } from '../validation/paymentSchema';
import { usePaymentStore } from '../store/paymentStore';

const PaymentForm = () => {
  const addPayment = usePaymentStore((state) => state.addPayment);

  const form = useForm<PaymentFormType>({
    resolver: zodResolver(PaymentSchema),
    defaultValues: {
      nameOnCard: '',
      cardNumber: '',
      month: '',
      year: '',
      cvv: '',
      sameAddress: true,
    },
  });

  const onSubmit = (data: PaymentFormType) => {
    console.log('✅ Payment Submitted:', data);
    addPayment(data);
    form.reset();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-background-50 flex w-112 flex-col gap-10 p-2"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-md text-text-600 font-semibold">Payment Method</h2>
        <p className="text-table-sm text-text-400">All transactions are secure & encrypted</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Name on Card */}
        <div>
          <label className="text-list text-text-600 font-medium">
            Name on Card <span className="text-red-500">*</span>
          </label>
          <Controller
            control={form.control}
            name="nameOnCard"
            render={({ field }) => (
              <InputComponent
                placeholder="Enter Your Name"
                type="text"
                className="border-text-600 h-12 rounded-sm"
                {...field}
              />
            )}
          />
          {form.formState.errors.nameOnCard && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.nameOnCard.message}</p>
          )}
        </div>

        {/* Card Number */}
        <div>
          <label className="text-list text-text-600 font-medium">
            Card Number <span className="text-red-500">*</span>
          </label>
          <Controller
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <InputComponent
                placeholder="Card Number"
                type="text"
                className="border-text-600 h-12 rounded-sm"
                {...field}
              />
            )}
          />
          {form.formState.errors.cardNumber && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.cardNumber.message}</p>
          )}
        </div>

        {/* Month / Year / CVV */}
        <div className="flex w-full">
          {/* Month */}
          <div className="flex w-[45%] flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Month <span className="text-red-500">*</span>
            </label>
            <Controller
              control={form.control}
              name="month"
              render={({ field }) => (
                <InputComponent
                  placeholder="MM"
                  type="text"
                  className="border-text-400 h-12 rounded-l-md rounded-r-none border"
                  {...field}
                />
              )}
            />
            {form.formState.errors.month && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.month.message}</p>
            )}
          </div>

          {/* Year */}
          <div className="-ml-[1px] flex w-[35%] flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Year <span className="text-red-500">*</span>
            </label>
            <Controller
              control={form.control}
              name="year"
              render={({ field }) => (
                <InputComponent
                  placeholder="YYYY"
                  type="text"
                  className="border-text-400 h-12 rounded-none border"
                  {...field}
                />
              )}
            />
            {form.formState.errors.year && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.year.message}</p>
            )}
          </div>

          {/* CVV */}
          <div className="-ml-[1px] flex w-[20%] flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              CVV <span className="text-red-500">*</span>
            </label>
            <Controller
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <InputComponent
                  placeholder="123"
                  type="text"
                  className="border-text-400 h-12 rounded-l-none rounded-r-md border"
                  {...field}
                />
              )}
            />
            {form.formState.errors.cvv && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.cvv.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="flex flex-col gap-6 pt-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-md text-text600">Billing Address</h3>
          <p className="text-table-sm text-text-400">
            The billing address is associated with your payment method.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={form.watch('sameAddress')}
            onCheckedChange={(v) => form.setValue('sameAddress', !!v)}
            id="sameAddress"
          />
          <label htmlFor="sameAddress" className="text-sm text-gray-700 select-none">
            Same as shipping address.
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Button type="submit" variant={'primary'} className="rounded-7xl h-12 flex-1">
          Submit
        </Button>
        <Button
          type="button"
          variant="outline"
          className="rounded-7xl border-primary-600 text-primary-600 hover:bg-primary-50 h-12 flex-1"
          onClick={() => form.reset()}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
