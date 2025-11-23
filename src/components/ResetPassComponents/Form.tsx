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
import axios from 'axios';

const otpSchema = z.object({
  pin: z.string().regex(/^[0-9]{6}$/, 'OTP must be 6 digits'),
});

type OtpFormValues = z.infer<typeof otpSchema>;

const Form: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get('email') ?? '';
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    mode: 'onChange',
    defaultValues: { pin: '' },
  });
  const onSubmit = async (data: OtpFormValues) => {
    try {
      const payload = {
        email,
        otpCode: data.pin,
      };

      const res = await axios.post('http://localhost:3000/api/v1/auth/verify-otp', payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('OTP verified successfully', res.data);

      setSearchParams({
        auth: 'set-new-password',
        email,
      });
    } catch (err) {
      console.error('OTP verification failed:', err);
      form.setError('pin', { message: 'Invalid or expired OTP' });
    }
  };

  const handleResentOTP = async () => {
    try {
      await axios.post(
        'http://localhost:3000/api/v1/auth/resend-otp',
        { email },
        { headers: { 'Content-Type': 'application/json' } },
      );

      console.log('OTP resent successfully');
    } catch (err) {
      console.error('Failed to resend OTP:', err);
    }
  };

  // const hasError = !!form.formState.errors.pin;
  const isDisabled = form.watch('pin').length !== 6;

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
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="flex w-full justify-between">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>

                {fieldState.error && (
                  <p className="text-status-danger px-1 text-xs">{fieldState.error.message}</p>
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
          <span onClick={handleResentOTP} className="text-status-action cursor-pointer underline">
            Resend the code
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
