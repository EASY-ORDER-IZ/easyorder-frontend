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

const otpSchema = z.object({
  pin: z.string().regex(/^[0-9]{6}$/, 'OTP must be 6 digits'),
});

type OtpFormValues = z.infer<typeof otpSchema>;

const Form: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get('email');

  const switchDialog = (
    target: 'sign-in' | 'sign-up' | 'forget-password' | 'reset_pass' | 'set-new-password',
  ) => {
    setSearchParams({ auth: target });
  };

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    mode: 'onChange',
    defaultValues: { pin: '' },
  });

  const onSubmit = (data: OtpFormValues) => {
    console.log('OTP submitted:', data);
    switchDialog('set-new-password');
  };

  const hasError = !!form.formState.errors.pin;
  const isDisabled = form.watch('pin').length < 6 || hasError;

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
              We sent a code to <span className="bold font-medium">{email}</span>{' '}
              <span
                onClick={() => switchDialog('forget-password')}
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
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="flex flex-col items-center gap-1 p-4"
              >
                <InputOTP maxLength={6} {...field} inputMode="numeric" pattern="[0-9]*">
                  <InputOTPGroup className="flex w-full justify-between">
                    <InputOTPSlot
                      index={0}
                      className={`rounded-sm rounded-l-[10px] border-1 ${
                        hasError
                          ? 'border-status-danger text-status-danger bg-red-100'
                          : 'text-text-600 border-text-200'
                      }`}
                    />
                    <InputOTPSlot
                      index={1}
                      className={`rounded-sm border-1 ${
                        hasError
                          ? 'border-status-danger text-status-danger bg-red-100'
                          : 'text-text-600 border-text-200'
                      }`}
                    />
                    <InputOTPSlot
                      index={2}
                      className={`rounded-sm border-1 ${
                        hasError
                          ? 'border-status-danger text-status-danger bg-red-100'
                          : 'text-text-600 border-text-200'
                      }`}
                    />
                    <InputOTPSlot
                      index={3}
                      className={`rounded-sm border-1 ${
                        hasError
                          ? 'border-status-danger text-status-danger bg-red-100'
                          : 'text-text-600 border-text-200'
                      }`}
                    />
                    <InputOTPSlot
                      index={4}
                      className={`rounded-sm border-1 ${
                        hasError
                          ? 'border-status-danger text-status-danger bg-red-100'
                          : 'text-text-600 border-text-200'
                      }`}
                    />
                    <InputOTPSlot
                      index={5}
                      className={`rounded-sm rounded-r-[0.2px] border-1 ${
                        hasError
                          ? 'border-status-danger text-status-danger bg-red-100'
                          : 'text-text-600 border-text-200'
                      }`}
                    />
                  </InputOTPGroup>
                </InputOTP>
                {fieldState.error && (
                  <p className="text-status-danger text-left text-xs">{fieldState.error.message}</p>
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button
          disabled={isDisabled}
          title="Confirm"
          type="submit"
          variant="primary"
          className="rounded-7xl h-12 w-full max-w-88"
        />

        <div className="text-text-400 text-center text-xs">
          Didn’t receive the code?{' '}
          <span
            onClick={() => console.log('Resend code')}
            className="text-status-action cursor-pointer underline"
          >
            Resend the code
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
