'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldGroup } from '@/components/ui/field';
import { Button } from '@/components/ui/button/button';
import { useSearchParams } from 'react-router-dom';
import Title from '@/components/SignInComponents/Title';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import axios, { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

const otpSchema = z.object({
  pin: z.string().regex(/^[0-9]{6}$/, 'OTP must be 6 digits'),
});

type OtpFormValues = z.infer<typeof otpSchema>;

const Form: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get('email') ?? '';

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    mode: 'onSubmit',
    defaultValues: { pin: '' },
  });

  const verifyOTPMutation = useMutation({
    mutationFn: async (data: OtpFormValues) => {
      const res = await axios.post(
        'http://localhost:3000/api/v1/auth/verify-otp',
        { email, otpCode: data.pin },
        { headers: { 'Content-Type': 'application/json' } },
      );
      return res.data;
    },
    onSuccess: () => {
      setSearchParams({ auth: 'set-new-password', email });
    },
    onError: (error: AxiosError) => {
      const apiError = error.response?.data?.error;
      const details = apiError?.details?.[0];

      if (details?.message) {
        form.setError('pin', { type: 'server', message: details.message });
      } else {
        form.setError('pin', {
          type: 'server',
          message: 'Incorrect OTP. Please try again.',
        });
      }
    },
  });

  const resendOTPMutation = useMutation({
    mutationFn: async () => {
      await axios.post(
        'http://localhost:3000/api/v1/auth/resend-otp',
        { email },
        { headers: { 'Content-Type': 'application/json' } },
      );
    },
  });

  const onSubmit = (data: OtpFormValues) => {
    verifyOTPMutation.mutate(data);
  };

  const errorMessage = form.formState.errors.pin?.message;
  const hasError = Boolean(errorMessage);

  return (
    <div className="flex w-full items-center justify-center gap-6 p-4">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-5"
      >
        <Title
          title="Reset Password"
          desc={
            <>
              We sent a code to <span className="font-medium">{email}</span>{' '}
              <span
                onClick={() => setSearchParams({ auth: 'forget-password', email })}
                className="text-status-action cursor-pointer underline"
              >
                Change Email
              </span>
            </>
          }
        />

        <FieldGroup className="flex flex-col items-center justify-center gap-2">
          <Controller
            name="pin"
            control={form.control}
            render={({ field }) => (
              <Field>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="flex w-full justify-between gap-3">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        className={`h-14 w-14 rounded-md border text-center text-lg font-medium transition-all duration-150 ${
                          hasError
                            ? 'border-red-500 text-red-600 focus:border-red-600 focus:ring-red-300'
                            : 'focus:border-primary-main focus:ring-primary-main/40 border-gray-300 text-black'
                        } `}
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>

                {hasError && <p className="text-status-danger mt-1 text-xs">{errorMessage}</p>}
              </Field>
            )}
          />
        </FieldGroup>

        <Button
          disabled={form.watch('pin').length !== 6}
          title="Confirm"
          type="submit"
          variant="primary"
          className="rounded-7xl h-12 w-full max-w-88"
        />

        <div className="text-text-400 text-center text-xs">
          Didn’t receive the code?{' '}
          <span
            onClick={() => resendOTPMutation.mutate()}
            className="text-status-action cursor-pointer underline"
          >
            {resendOTPMutation.isLoading ? 'Sending...' : 'Resend the code'}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
